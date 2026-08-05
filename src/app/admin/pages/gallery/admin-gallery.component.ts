import { Component, inject, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { GalleryFirestoreService } from '../../services/gallery-firestore.service';
import { PackagesFirestoreService } from '../../services/packages-firestore.service';
import { GalleryImage, GALLERY_CATEGORIES } from '../../models/gallery-image.model';
import { compressImage, fileNameToSlug } from '../../services/image-compressor';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { PackagesService } from '../../../core/services/packages.service';

/** One file queued for upload, with its own editable metadata. */
interface PendingImage {
  fileName: string;
  caption: string;
  category: string;
  packageSlug: string;
  dataUrl: string;
  width: number;
  height: number;
  bytes: number;
  /** True when the filename matched a package slug automatically. */
  autoMatched: boolean;
}

@Component({
  selector: 'app-admin-gallery',
  imports: [
    CommonModule, FormsModule,
    MatCardModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatSelectModule, MatInputModule,
    MatProgressSpinnerModule, MatProgressBarModule,
    MatTooltipModule, MatChipsModule
  ],
  templateUrl: './admin-gallery.component.html',
  styleUrl: './admin-gallery.component.scss'
})
export class AdminGalleryComponent implements OnInit, OnDestroy {
  private galleryService = inject(GalleryFirestoreService);
  private pkgService = inject(PackagesFirestoreService);
  private hardcodedPkgs = inject(PackagesService);
  private snackbar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  readonly categories = GALLERY_CATEGORIES;

  images = signal<GalleryImage[]>([]);
  pending = signal<PendingImage[]>([]);
  isLoading = signal(true);
  isProcessing = signal(false);
  isSaving = signal(false);
  loadError = signal('');

  /** Every package the admin can attach an image to. */
  packageOptions = signal<{ slug: string; title: string }[]>([]);

  totalBytes = computed(() =>
    this.images().reduce((sum, i) => sum + (i.bytes ?? 0), 0)
  );

  private subs: Subscription[] = [];

  ngOnInit(): void {
    this.subs.push(
      this.galleryService.getAll().subscribe({
        next: imgs => {
          this.images.set(imgs);
          this.isLoading.set(false);
        },
        error: err => {
          console.error('[AdminGallery] load failed:', err);
          this.loadError.set(err?.message ?? 'Could not load the gallery.');
          this.isLoading.set(false);
        }
      })
    );

    // Offer both the built-in packages and anything created in the admin.
    const builtIn = this.hardcodedPkgs.getAll().map(p => ({ slug: p.slug, title: p.shortTitle || p.title }));
    this.packageOptions.set(builtIn);

    this.subs.push(
      this.pkgService.getAll().subscribe({
        next: pkgs => {
          const merged = new Map(builtIn.map(p => [p.slug, p]));
          pkgs.forEach(p => merged.set(p.slug, { slug: p.slug, title: p.shortTitle || p.title }));
          this.packageOptions.set([...merged.values()]);
        },
        error: () => { /* built-in list is a fine fallback */ }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  async onFilesSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    input.value = ''; // allow re-selecting the same file
    if (!files.length) return;

    this.isProcessing.set(true);
    const slugs = new Set(this.packageOptions().map(p => p.slug));
    const added: PendingImage[] = [];
    const failed: string[] = [];

    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        failed.push(`${file.name} (not an image)`);
        continue;
      }
      try {
        const c = await compressImage(file);
        const guess = fileNameToSlug(file.name);
        const matched = slugs.has(guess);
        added.push({
          fileName: file.name,
          caption: this.prettifyName(file.name),
          category: this.categories[0],
          packageSlug: matched ? guess : '',
          dataUrl: c.dataUrl,
          width: c.width,
          height: c.height,
          bytes: c.bytes,
          autoMatched: matched
        });
      } catch (err: unknown) {
        failed.push(`${file.name} (${err instanceof Error ? err.message : 'failed'})`);
      }
    }

    this.pending.set([...this.pending(), ...added]);
    this.isProcessing.set(false);

    if (failed.length) {
      this.snackbar.open(`Skipped: ${failed.join(', ')}`, 'Close', { duration: 8000 });
    }
  }

  removePending(index: number): void {
    this.pending.set(this.pending().filter((_, i) => i !== index));
  }

  async saveAll(): Promise<void> {
    const queue = this.pending();
    if (!queue.length) return;

    this.isSaving.set(true);
    let saved = 0;
    const failed: string[] = [];

    for (const p of queue) {
      try {
        await this.galleryService.add({
          fileName: p.fileName,
          caption: p.caption.trim() || this.prettifyName(p.fileName),
          category: p.category,
          packageSlug: p.packageSlug,
          dataUrl: p.dataUrl,
          width: p.width,
          height: p.height,
          bytes: p.bytes
        });
        saved++;
      } catch (err: unknown) {
        console.error('[AdminGallery] save failed:', err);
        failed.push(`${p.fileName}: ${err instanceof Error ? err.message : 'unknown error'}`);
      }
    }

    this.pending.set([]);
    this.isSaving.set(false);

    this.snackbar.open(
      failed.length
        ? `Uploaded ${saved}. Failed: ${failed.join('; ')}`
        : `Uploaded ${saved} image${saved === 1 ? '' : 's'}.`,
      'Close',
      { duration: failed.length ? 9000 : 4000 }
    );
  }

  confirmDelete(img: GalleryImage): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete image?',
        message: `"${img.caption}" will be removed from the gallery permanently.`,
        confirmText: 'Delete'
      }
    });

    ref.afterClosed().subscribe(async confirmed => {
      if (!confirmed) return;
      try {
        await this.galleryService.delete(img.id!);
        this.snackbar.open('Image deleted.', 'Close', { duration: 3000 });
      } catch (err: unknown) {
        this.snackbar.open(
          `Delete failed: ${err instanceof Error ? err.message : 'unknown error'}`,
          'Close',
          { duration: 6000 }
        );
      }
    });
  }

  async changePackage(img: GalleryImage, slug: string): Promise<void> {
    try {
      await this.galleryService.update(img.id!, { packageSlug: slug });
      this.snackbar.open(slug ? 'Linked to package.' : 'Now gallery-only.', 'Close', { duration: 2500 });
    } catch {
      this.snackbar.open('Could not update the image.', 'Close', { duration: 4000 });
    }
  }

  packageTitle(slug: string): string {
    return this.packageOptions().find(p => p.slug === slug)?.title ?? slug;
  }

  formatKb(bytes: number): string {
    return `${Math.round((bytes ?? 0) / 1024)} KB`;
  }

  private prettifyName(fileName: string): string {
    return fileName
      .replace(/\.[^.]+$/, '')
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, c => c.toUpperCase());
  }
}
