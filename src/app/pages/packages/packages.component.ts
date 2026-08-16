import { Component, inject, OnInit, PLATFORM_ID, signal, computed } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { PackagesService, TourPackage } from '../../core/services/packages.service';
import { PublicPackagesService } from '../../core/services/public-packages.service';
import { PublicGalleryService } from '../../core/services/public-gallery.service';
import { PackageImageService } from '../../core/services/package-image.service';
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
  private galleryService = inject(PublicGalleryService);
  private imageService = inject(PackageImageService);
  private platformId = inject(PLATFORM_ID);

  /** slug -> uploaded photo, for packages with an image linked in the admin. */
  private packagePhotos = signal<Record<string, string>>({});

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

  /** slug -> gallery photo, assigned so no two packages share an image. */
  private destinationImages = computed(() => this.imageService.assign(this.packages()));

  ngOnInit(): void {
    // Hardcoded packages render immediately (and during prerender for SEO).
    this.packages.set(this.pkgService.getAll());

    if (isPlatformBrowser(this.platformId)) {
      this.publicPkgService.getActive().subscribe({
        next: (firestorePkgs) => {
          if (firestorePkgs.length === 0) return;
          this.packages.set(
            this.publicPkgService.mergeWithBuiltIn(this.pkgService.getAll(), firestorePkgs)
          );
        },
        error: (err) => console.error('[Packages] Firestore error:', err)
      });

      this.galleryService.getAll().subscribe({
        next: images => {
          const map: Record<string, string> = {};
          // Newest first, so only keep the first image seen per package.
          images.forEach(img => {
            if (img.packageSlug && !map[img.packageSlug]) {
              map[img.packageSlug] = img.dataUrl;
            }
          });
          this.packagePhotos.set(map);
        },
        error: (err) => console.error('[Packages] Gallery error:', err)
      });
    }

    this.seo.updateSeo({
      title: 'Tour Packages – Adi Kailash, Om Parvat & Himalayan Tours',
      description: 'Browse all Kumaon Yatra Tours Himalayan packages – 4-day to 9-day tours covering Adi Kailash, Om Parvat, Darma Valley, Panchachuli, and the best of Kumaon.',
      keywords: 'Adi Kailash packages, Om Parvat tour packages, Himalayan pilgrimage packages, Uttarakhand tour packages, Panchachuli trek',
    });
  }

  /**
   * Picks a package photo, most specific first:
   *   1. an image linked to this package in the admin panel
   *   2. a gallery photo of a destination named in the package title
   *   3. generic Himalayan stock
   */
  getImage(index: number, slug?: string): string {
    if (slug) {
      const uploaded = this.packagePhotos()[slug];
      if (uploaded) return uploaded;

      const destination = this.destinationImages()[slug];
      if (destination) return destination;
    }

    return this.imageService.fallback(index);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN').format(price);
  }

  setFilter(difficulty: string): void {
    this.selectedDifficulty.set(difficulty);
  }
}
