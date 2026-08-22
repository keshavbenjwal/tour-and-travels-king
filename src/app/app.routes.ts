import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Kumaon Yatra Tours – Explore the Sacred Himalayas'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | Kumaon Yatra Tours'
  },
  {
    path: 'packages',
    loadComponent: () => import('./pages/packages/packages.component').then(m => m.PackagesComponent),
    title: 'Tour Packages | Kumaon Yatra Tours'
  },
  {
    path: 'packages/adi-kailash-4-days',
    loadComponent: () => import('./pages/package-detail/package-detail.component').then(m => m.PackageDetailComponent),
    title: 'Adi Kailash 4 Days Package | Kumaon Yatra Tours'
  },
  {
    path: 'packages/adi-kailash-6-days',
    loadComponent: () => import('./pages/package-detail/package-detail.component').then(m => m.PackageDetailComponent),
    title: 'Adi Kailash 6 Days Package | Kumaon Yatra Tours'
  },
  {
    path: 'packages/adi-kailash-7-days',
    loadComponent: () => import('./pages/package-detail/package-detail.component').then(m => m.PackageDetailComponent),
    title: 'Adi Kailash 7 Days Package | Kumaon Yatra Tours'
  },
  {
    path: 'packages/adi-kailash-9-days',
    loadComponent: () => import('./pages/package-detail/package-detail.component').then(m => m.PackageDetailComponent),
    title: 'Adi Kailash 9 Days Package | Kumaon Yatra Tours'
  },
  {
    path: 'packages/darma-valley-panchachuli',
    loadComponent: () => import('./pages/package-detail/package-detail.component').then(m => m.PackageDetailComponent),
    title: 'Darma Valley & Panchachuli Adventure | Kumaon Yatra Tours'
  },
  {
    path: 'packages/adi-kailash-delhi-6-days',
    loadComponent: () => import('./pages/package-detail/package-detail.component').then(m => m.PackageDetailComponent),
    title: 'Adi Kailash & Om Parvat from Delhi – 6 Days | Kumaon Yatra Tours'
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent),
    title: 'Gallery | Kumaon Yatra Tours'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | Kumaon Yatra Tours'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(m => m.adminRoutes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
