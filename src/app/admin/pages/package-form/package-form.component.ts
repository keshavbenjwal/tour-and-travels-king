import { Component, inject, signal, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { doc, getDoc } from 'firebase/firestore';
import { PackagesFirestoreService } from '../../services/packages-firestore.service';
import { FirebaseService } from '../../services/firebase.service';
import { AdminPackage } from '../../models/admin-package.model';

@Component({
  selector: 'app-package-form',
  imports: [
    CommonModule, ReactiveFormsModule, RouterLink,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatButtonModule, MatIconModule,
    MatSlideToggleModule, MatProgressSpinnerModule,
    MatDividerModule, MatTooltipModule
  ],
  templateUrl: './package-form.component.html',
  styleUrl: './package-form.component.scss'
})
export class PackageFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private pkgService = inject(PackagesFirestoreService);
  private firebase = inject(FirebaseService);
  private snackbar = inject(MatSnackBar);

  isEditMode = signal(false);
  isLoading = signal(false);
  isSaving = signal(false);
  editId = signal<string | null>(null);

  readonly difficulties = ['Easy', 'Moderate', 'Challenging'];

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    shortTitle: ['', [Validators.required]],
    slug: ['', [Validators.required, Validators.pattern(/^[a-z0-9-]+$/)]],
    duration: ['', Validators.required],
    days: [1, [Validators.required, Validators.min(1)]],
    nights: [0, [Validators.required, Validators.min(0)]],
    startLocation: ['', Validators.required],
    endLocation: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(1)]],
    originalPrice: [0, [Validators.required, Validators.min(1)]],
    difficulty: ['Moderate', Validators.required],
    maxAltitude: ['', Validators.required],
    groupSize: ['', Validators.required],
    badge: [''],
    overview: ['', [Validators.required, Validators.minLength(50)]],
    highlights: ['', Validators.required],
    includes: ['', Validators.required],
    excludes: ['', Validators.required],
    metaDescription: ['', [Validators.required, Validators.maxLength(160)]],
    keywords: ['', Validators.required],
    active: [true]
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode.set(true);
      this.editId.set(id);
      this.loadPackage(id);
    }

    // Auto-generate slug from title (add mode only)
    this.form.get('title')!.valueChanges.subscribe(title => {
      if (!this.isEditMode()) {
        const slug = (title ?? '')
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-');
        this.form.get('slug')!.setValue(slug, { emitEvent: false });
      }
    });

    // Auto-set duration label from days/nights
    const syncDuration = () => {
      const d = this.form.get('days')!.value;
      const n = this.form.get('nights')!.value;
      if (d && n !== null) {
        this.form.get('duration')!.setValue(`${d} Days / ${n} Nights`, { emitEvent: false });
      }
    };
    this.form.get('days')!.valueChanges.subscribe(syncDuration);
    this.form.get('nights')!.valueChanges.subscribe(syncDuration);
  }

  private async loadPackage(id: string): Promise<void> {
    this.isLoading.set(true);
    try {
      const ref = doc(this.firebase.db, 'packages', id);
      const snap = await getDoc(ref);
      if (!snap.exists()) throw new Error('Package not found');
      const pkg = { id: snap.id, ...snap.data() } as AdminPackage;
      this.patchForm(pkg);
    } catch {
      this.snackbar.open('Could not load package.', 'Close', { duration: 4000 });
      this.router.navigate(['/admin/dashboard']);
    } finally {
      this.isLoading.set(false);
    }
  }

  private patchForm(pkg: AdminPackage): void {
    this.form.patchValue({
      ...pkg,
      highlights: (pkg.highlights ?? []).join('\n'),
      includes: (pkg.includes ?? []).join('\n'),
      excludes: (pkg.excludes ?? []).join('\n')
    });
  }

  private toArray(str: string | null | undefined): string[] {
    return (str ?? '').split('\n').map(s => s.trim()).filter(Boolean);
  }

  private buildPayload(): Omit<AdminPackage, 'id' | 'createdAt' | 'updatedAt'> {
    const v = this.form.value;
    return {
      title: v.title!,
      shortTitle: v.shortTitle!,
      slug: v.slug!,
      duration: v.duration!,
      days: Number(v.days),
      nights: Number(v.nights),
      startLocation: v.startLocation!,
      endLocation: v.endLocation!,
      price: Number(v.price),
      originalPrice: Number(v.originalPrice),
      difficulty: v.difficulty as 'Easy' | 'Moderate' | 'Challenging',
      maxAltitude: v.maxAltitude!,
      groupSize: v.groupSize!,
      badge: v.badge ?? '',
      overview: v.overview!,
      highlights: this.toArray(v.highlights),
      includes: this.toArray(v.includes),
      excludes: this.toArray(v.excludes),
      metaDescription: v.metaDescription!,
      keywords: v.keywords!,
      active: v.active ?? true
    };
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackbar.open('Please fix the errors before saving.', 'Close', { duration: 3000 });
      return;
    }
    this.isSaving.set(true);
    try {
      const payload = this.buildPayload();
      if (this.isEditMode()) {
        await this.pkgService.update(this.editId()!, payload);
        this.snackbar.open('Package updated successfully!', 'Close', { duration: 3000 });
      } else {
        await this.pkgService.add(payload);
        this.snackbar.open('Package added successfully!', 'Close', { duration: 3000 });
      }
      this.router.navigate(['/admin/dashboard']);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('Save error:', err);
      this.snackbar.open(`Save failed: ${msg}`, 'Close', { duration: 8000 });
    } finally {
      this.isSaving.set(false);
    }
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
}
