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
  private dialog = inject(MatDialog);
  private snackbar = inject(MatSnackBar);

  packages = signal<AdminPackage[]>([]);
  isLoading = signal(true);
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
}
