import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Tour and Travels King – Explore the Sacred Himalayas'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | Tour and Travels King'
  },
  {
    path: 'packages',
    loadComponent: () => import('./pages/packages/packages.component').then(m => m.PackagesComponent),
    title: 'Tour Packages | Tour and Travels King'
  },
  {
    path: 'packages/adi-kailash-4-days',
    loadComponent: () => import('./pages/package-detail/package-detail.component').then(m => m.PackageDetailComponent),
    title: 'Adi Kailash 4 Days Package | Tour and Travels King'
  },
  {
    path: 'packages/adi-kailash-6-days',
    loadComponent: () => import('./pages/package-detail/package-detail.component').then(m => m.PackageDetailComponent),
    title: 'Adi Kailash 6 Days Package | Tour and Travels King'
  },
  {
    path: 'packages/adi-kailash-7-days',
    loadComponent: () => import('./pages/package-detail/package-detail.component').then(m => m.PackageDetailComponent),
    title: 'Adi Kailash 7 Days Package | Tour and Travels King'
  },
  {
    path: 'packages/adi-kailash-9-days',
    loadComponent: () => import('./pages/package-detail/package-detail.component').then(m => m.PackageDetailComponent),
    title: 'Adi Kailash 9 Days Package | Tour and Travels King'
  },
  {
    path: 'packages/darma-valley-panchachuli',
    loadComponent: () => import('./pages/package-detail/package-detail.component').then(m => m.PackageDetailComponent),
    title: 'Darma Valley & Panchachuli Adventure | Tour and Travels King'
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent),
    title: 'Gallery | Tour and Travels King'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | Tour and Travels King'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
