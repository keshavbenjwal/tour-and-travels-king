import { Injectable } from '@angular/core';

/** Minimum shape needed to match a package to a destination photo. */
export interface MatchablePackage {
  slug: string;
  title: string;
  shortTitle?: string;
}

/**
 * Chooses a gallery photo for each package based on the destinations named in
 * its title. Shared by the home page and the packages page so the same package
 * always shows the same image in both places.
 */
@Injectable({ providedIn: 'root' })
export class PackageImageService {
  private readonly pools: { match: RegExp; photos: string[] }[] = [
    {
      match: /adi[\s-]?kailash|chota[\s-]?kailash/i,
      photos: [
        'gallery/adi-kailash-1-thumb.jpg',
        'gallery/adi-kailash-2-thumb.jpg',
        'gallery/adi-kailash-3-thumb.jpg',
        'gallery/adi-kailash-4-thumb.jpg'
      ]
    },
    {
      match: /om[\s-]?par[vw]at/i,
      photos: [
        'gallery/om-parvat-1-thumb.jpg',
        'gallery/om-parvat-2-thumb.jpg',
        'gallery/om-parvat-3-thumb.jpg'
      ]
    },
    {
      match: /d[ha]?arma[\s-]?valley|panchachuli/i,
      photos: [
        'gallery/darma-valley-1-thumb.jpg',
        'gallery/darma-valley-2-thumb.jpg',
        'gallery/darma-valley-3-thumb.jpg'
      ]
    }
  ];

  private readonly stock = [
    '1506905925346-21bda4d32df4',
    '1551632811-561732d1e306',
    '1519681393784-d120267933ba',
    '1464822759023-fed622ff2c3b',
    '1454496522488-7a8e488e8606',
    '1548013146-72479768bada',
    '1469854523086-cc02fe5d8800',
    '1501854140801-50d01698950b'
  ];

  /**
   * Maps slug -> photo, giving each package a distinct image. Always pass the
   * complete package list, not a subset: the assignment depends on order, so a
   * partial list would hand the same package a different photo elsewhere.
   */
  assign(packages: MatchablePackage[]): Record<string, string> {
    const assigned: Record<string, string> = {};
    const used = new Set<string>();

    for (const pkg of packages) {
      const haystack = `${pkg.title} ${pkg.shortTitle ?? ''} ${pkg.slug}`;

      for (const pool of this.pools) {
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
  }

  /** Generic Himalayan photo, for packages that match no destination. */
  fallback(index: number): string {
    const id = this.stock[index % this.stock.length];
    return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;
  }
}
