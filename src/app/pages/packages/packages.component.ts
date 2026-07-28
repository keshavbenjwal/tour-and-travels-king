import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { PackagesService, TourPackage } from '../../core/services/packages.service';
import { PublicPackagesService } from '../../core/services/public-packages.service';
import { AdminPackage } from '../../admin/models/admin-package.model';

@Component({
  selector: 'app-packages',
  imports: [RouterLink, CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent implements OnInit {
  private seo = inject(SeoService);
  private pkgService = inject(PackagesService);
  private publicPkgService = inject(PublicPackagesService);
  private platformId = inject(PLATFORM_ID);

  packages: TourPackage[] = [];
  isLoadingFirestore = false;
  selectedDifficulty = 'All';
  difficulties = ['All', 'Easy', 'Moderate', 'Challenging'];

  private readonly images = [
    '1506905925346-21bda4d32df4',
    '1551632811-561732d1e306',
    '1519681393784-d120267933ba',
    '1464822759023-fed622ff2c3b',
    '1454496522488-7a8e488e8606',
    '1548013146-72479768bada',
    '1469854523086-cc02fe5d8800',
    '1501854140801-50d01698950b'
  ];

  get filteredPackages(): TourPackage[] {
    if (this.selectedDifficulty === 'All') return this.packages;
    return this.packages.filter(p => p.difficulty === this.selectedDifficulty);
  }

  ngOnInit(): void {
    this.packages = this.pkgService.getAll();

    if (isPlatformBrowser(this.platformId)) {
      this.isLoadingFirestore = true;
      this.publicPkgService.getActive().subscribe({
        next: (firestorePkgs) => {
          if (firestorePkgs.length > 0) {
            const hardcodedSlugs = new Set(this.packages.map(p => p.slug));
            const newPkgs = firestorePkgs
              .filter(fp => !hardcodedSlugs.has(fp.slug))
              .map(fp => this.toTourPackage(fp));
            this.packages = [...this.packages, ...newPkgs];
          }
          this.isLoadingFirestore = false;
        },
        error: () => { this.isLoadingFirestore = false; }
      });
    }

    this.seo.updateSeo({
      title: 'Tour Packages – Adi Kailash, Om Parvat & Himalayan Tours',
      description: 'Browse all Kumaon Yatra Tours Himalayan packages – 4-day to 9-day tours covering Adi Kailash, Om Parvat, Darma Valley, Panchachuli, and the best of Kumaon.',
      keywords: 'Adi Kailash packages, Om Parvat tour packages, Himalayan pilgrimage packages, Uttarakhand tour packages, Panchachuli trek',
    });
  }

  private toTourPackage(fp: AdminPackage): TourPackage {
    return {
      id: fp.id!,
      slug: fp.slug,
      title: fp.title,
      shortTitle: fp.shortTitle,
      duration: fp.duration,
      days: fp.days,
      nights: fp.nights,
      startLocation: fp.startLocation,
      endLocation: fp.endLocation,
      price: fp.price,
      originalPrice: fp.originalPrice,
      difficulty: fp.difficulty,
      maxAltitude: fp.maxAltitude,
      groupSize: fp.groupSize,
      badge: fp.badge,
      overview: fp.overview,
      highlights: fp.highlights ?? [],
      includes: fp.includes ?? [],
      excludes: fp.excludes ?? [],
      metaDescription: fp.metaDescription,
      keywords: fp.keywords,
      itinerary: []
    };
  }

  getImage(index: number): string {
    const id = this.images[index % this.images.length];
    return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN').format(price);
  }

  setFilter(difficulty: string): void {
    this.selectedDifficulty = difficulty;
  }
}
