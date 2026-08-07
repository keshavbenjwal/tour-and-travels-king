import { Component, inject, OnInit, PLATFORM_ID, signal, computed } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { PackagesService, TourPackage } from '../../core/services/packages.service';
import { PublicPackagesService } from '../../core/services/public-packages.service';
import { PublicGalleryService } from '../../core/services/public-gallery.service';
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

  /** Gallery photos of each destination, matched to packages by title. */
  private readonly destinationPools: { key: string; match: RegExp; photos: string[] }[] = [
    {
      key: 'adi-kailash',
      match: /adi[\s-]?kailash|chota[\s-]?kailash/i,
      photos: [
        'gallery/adi-kailash-1-thumb.jpg',
        'gallery/adi-kailash-2-thumb.jpg',
        'gallery/adi-kailash-3-thumb.jpg',
        'gallery/adi-kailash-4-thumb.jpg'
      ]
    },
    {
      key: 'om-parvat',
      match: /om[\s-]?par[vw]at/i,
      photos: [
        'gallery/om-parvat-1-thumb.jpg',
        'gallery/om-parvat-2-thumb.jpg',
        'gallery/om-parvat-3-thumb.jpg'
      ]
    },
    {
      key: 'darma-valley',
      match: /d[ha]?arma[\s-]?valley|panchachuli/i,
      photos: [
        'gallery/darma-valley-1-thumb.jpg',
        'gallery/darma-valley-2-thumb.jpg',
        'gallery/darma-valley-3-thumb.jpg'
      ]
    }
  ];

  /**
   * slug -> gallery photo, assigned so no two packages share an image.
   * A package is matched on every destination its title mentions, so once the
   * Adi Kailash photos run out the next one falls back to Om Parvat, which
   * those itineraries also cover.
   */
  private destinationImages = computed(() => {
    const assigned: Record<string, string> = {};
    const used = new Set<string>();

    for (const pkg of this.packages()) {
      const haystack = `${pkg.title} ${pkg.shortTitle} ${pkg.slug}`;

      for (const pool of this.destinationPools) {
        if (!pool.match.test(haystack)) continue;
        const free = pool.photos.find(p => !used.has(p));
        if (free) {
          assigned[pkg.slug] = free;
          used.add(free);
          break;
        }
      }
    }

    return assigned;
  });

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
