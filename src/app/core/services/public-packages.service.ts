import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Observable, from, of, shareReplay } from 'rxjs';
import { FirebaseService } from '../../admin/services/firebase.service';
import { AdminPackage } from '../../admin/models/admin-package.model';
import { TourPackage } from './packages.service';

@Injectable({ providedIn: 'root' })
export class PublicPackagesService {
  private firebase = inject(FirebaseService);
  private platformId = inject(PLATFORM_ID);

  private cache?: Observable<AdminPackage[]>;

  /**
   * Active packages, newest edit first and de-duplicated by slug.
   * Shared so the home and packages pages issue one read between them.
   */
  getActive(): Observable<AdminPackage[]> {
    if (!isPlatformBrowser(this.platformId)) return of([]);

    if (!this.cache) {
      const q = query(collection(this.firebase.db, 'packages'), where('active', '==', true));
      this.cache = from(
        getDocs(q).then(snap => {
          const all = snap.docs.map(d => ({ id: d.id, ...d.data() }) as AdminPackage);
          return this.dedupeBySlug(all);
        })
      ).pipe(shareReplay({ bufferSize: 1, refCount: false }));
    }

    return this.cache;
  }

  /**
   * The built-in packages with admin edits applied on top: a Firestore package
   * replaces the built-in one sharing its slug, and anything new is appended.
   * Used by both the home and packages pages so they cannot disagree.
   */
  mergeWithBuiltIn(builtIn: TourPackage[], firestore: AdminPackage[]): TourPackage[] {
    const bySlug = new Map(firestore.map(fp => [fp.slug, this.toTourPackage(fp)]));
    const merged = builtIn.map(b => bySlug.get(b.slug) ?? b);

    const builtInSlugs = new Set(builtIn.map(b => b.slug));
    const added = firestore
      .filter(fp => !builtInSlugs.has(fp.slug))
      .map(fp => this.toTourPackage(fp));

    return [...merged, ...added];
  }

  /**
   * Keeps one document per slug — the most recently edited. Duplicate slugs are
   * easy to create in the admin panel, and without this the stale copy can win
   * and silently undo an edit.
   */
  private dedupeBySlug(packages: AdminPackage[]): AdminPackage[] {
    const best = new Map<string, AdminPackage>();

    for (const pkg of packages) {
      const existing = best.get(pkg.slug);
      if (!existing || this.editedAt(pkg) > this.editedAt(existing)) {
        best.set(pkg.slug, pkg);
      }
    }

    return [...best.values()].sort((a, b) => this.editedAt(b) - this.editedAt(a));
  }

  /** Seconds since epoch of the last edit, falling back to creation time. */
  private editedAt(pkg: AdminPackage): number {
    const stamp = (pkg.updatedAt ?? pkg.createdAt) as { seconds?: number } | undefined;
    return stamp?.seconds ?? 0;
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
}
