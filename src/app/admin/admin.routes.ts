import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const adminRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/admin-login.component').then(m => m.AdminLoginComponent)
  },
  {
    path: '',
    loadComponent: () => import('./layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
      },
      {
        path: 'packages/new',
        loadComponent: () => import('./pages/package-form/package-form.component').then(m => m.PackageFormComponent)
      },
      {
        path: 'packages/:id/edit',
        loadComponent: () => import('./pages/package-form/package-form.component').then(m => m.PackageFormComponent)
      }
    ]
  }
];
