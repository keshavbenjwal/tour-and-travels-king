import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { Subscription } from 'rxjs';
import { PackagesFirestoreService } from '../../services/packages-firestore.service';
import { AdminPackage } from '../../models/admin-package.model';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { PackagesService, TourPackage } from '../../../core/services/packages.service';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    CommonModule, RouterLink,
    MatTableModule, MatButtonModule, MatIconModule,
    MatCardModule, MatChipsModule, MatTooltipModule,
    MatProgressSpinnerModule, MatBadgeModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {
  private pkgService = inject(PackagesFirestoreService);
  private builtInPkgService = inject(PackagesService);
  private dialog = inject(MatDialog);
  private snackbar = inject(MatSnackBar);

  packages = signal<AdminPackage[]>([]);
  isLoading = signal(true);
  isImporting = signal(false);
  displayedColumns = ['title', 'duration', 'price', 'difficulty', 'status', 'actions'];

  private sub?: Subscription;

  ngOnInit(): void {
    this.sub = this.pkgService.getAll().subscribe({
      next: pkgs => {
        this.packages.set(pkgs);
        this.isLoading.set(false);
      },
      error: () => {
        this.snackbar.open('Failed to load packages.', 'Close', { duration: 4000 });
        this.isLoading.set(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  openDeleteDialog(pkg: AdminPackage): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Package',
        message: `Are you sure you want to delete "${pkg.title}"? This cannot be undone.`,
        confirmText: 'Delete'
      }
    });

    ref.afterClosed().subscribe(async confirmed => {
      if (!confirmed) return;
      try {
        await this.pkgService.delete(pkg.id!);
        this.snackbar.open('Package deleted successfully.', 'Close', { duration: 3000 });
      } catch {
        this.snackbar.open('Failed to delete package.', 'Close', { duration: 4000 });
      }
    });
  }

  async toggleActive(pkg: AdminPackage): Promise<void> {
    try {
      await this.pkgService.update(pkg.id!, { active: !pkg.active });
      this.snackbar.open(
        `Package ${!pkg.active ? 'activated' : 'deactivated'}.`, 'Close', { duration: 2500 }
      );
    } catch {
      this.snackbar.open('Update failed.', 'Close', { duration: 3000 });
    }
  }

  get activeCount(): number {
    return this.packages().filter(p => p.active).length;
  }

  /** Built-in packages that are not yet in Firestore (matched by slug). */
  get notYetImported(): TourPackage[] {
    const existingSlugs = new Set(this.packages().map(p => p.slug));
    return this.builtInPkgService.getAll().filter(p => !existingSlugs.has(p.slug));
  }

  /**
   * One-time migration: copies the built-in packages into Firestore so they
   * become editable here. Matched by slug, so re-running never duplicates.
   */
  importBuiltIn(): void {
    const pending = this.notYetImported;
    if (pending.length === 0) return;

    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Import Built-in Packages',
        message: `Copy ${pending.length} built-in package(s) into Firestore so you can edit and delete them? Existing packages are left untouched.`,
        confirmText: 'Import'
      }
    });

    ref.afterClosed().subscribe(async confirmed => {
      if (!confirmed) return;
      this.isImporting.set(true);
      try {
        for (const pkg of pending) {
          await this.pkgService.add(this.toAdminPackage(pkg));
        }
        this.snackbar.open(`Imported ${pending.length} package(s).`, 'Close', { duration: 3000 });
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('Import failed:', err);
        this.snackbar.open(`Import failed: ${msg}`, 'Close', { duration: 8000 });
      } finally {
        this.isImporting.set(false);
      }
    });
  }

  private toAdminPackage(p: TourPackage): Omit<AdminPackage, 'id' | 'createdAt' | 'updatedAt'> {
    return {
      title: p.title,
      shortTitle: p.shortTitle,
      slug: p.slug,
      duration: p.duration,
      days: p.days,
      nights: p.nights,
      startLocation: p.startLocation,
      endLocation: p.endLocation,
      price: p.price,
      originalPrice: p.originalPrice,
      difficulty: p.difficulty,
      maxAltitude: p.maxAltitude,
      groupSize: p.groupSize,
      badge: p.badge ?? '',
      overview: p.overview,
      highlights: p.highlights ?? [],
      includes: p.includes ?? [],
      excludes: p.excludes ?? [],
      metaDescription: p.metaDescription,
      keywords: p.keywords,
      active: true,
      itinerary: p.itinerary ?? []
    };
  }
}
