import { Component, inject, OnInit, PLATFORM_ID, signal, computed } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
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

  // Signals — this app runs zoneless, so async updates must go through signals
  // for change detection to pick them up.
  packages = signal<TourPackage[]>([]);
  selectedDifficulty = signal('All');

  difficulties = ['All', 'Easy', 'Moderate', 'Challenging'];

  filteredPackages = computed(() => {
    const all = this.packages();
    const filter = this.selectedDifficulty();
    return filter === 'All' ? all : all.filter(p => p.difficulty === filter);
  });

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

  ngOnInit(): void {
    // Hardcoded packages render immediately (and during prerender for SEO).
    this.packages.set(this.pkgService.getAll());

    if (isPlatformBrowser(this.platformId)) {
      this.publicPkgService.getActive().subscribe({
        next: (firestorePkgs) => {
          if (firestorePkgs.length === 0) return;
          this.packages.set(this.merge(this.pkgService.getAll(), firestorePkgs));
        },
        error: (err) => console.error('[Packages] Firestore error:', err)
      });
    }

    this.seo.updateSeo({
      title: 'Tour Packages – Adi Kailash, Om Parvat & Himalayan Tours',
      description: 'Browse all Kumaon Yatra Tours Himalayan packages – 4-day to 9-day tours covering Adi Kailash, Om Parvat, Darma Valley, Panchachuli, and the best of Kumaon.',
      keywords: 'Adi Kailash packages, Om Parvat tour packages, Himalayan pilgrimage packages, Uttarakhand tour packages, Panchachuli trek',
    });
  }

  /**
   * Shows the built-in packages plus everything added via the admin panel.
   * A Firestore package with the same slug as a built-in one replaces it,
   * so edits made in the admin panel take effect.
   */
  private merge(hardcoded: TourPackage[], firestore: AdminPackage[]): TourPackage[] {
    const fromAdmin = new Map(firestore.map(fp => [fp.slug, this.toTourPackage(fp)]));
    const merged = hardcoded.map(hc => fromAdmin.get(hc.slug) ?? hc);
    const usedSlugs = new Set(hardcoded.map(hc => hc.slug));
    const newOnes = firestore
      .filter(fp => !usedSlugs.has(fp.slug))
      .map(fp => this.toTourPackage(fp));
    return [...merged, ...newOnes];
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
      itinerary: fp.itinerary ?? []
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
    this.selectedDifficulty.set(difficulty);
  }
}
