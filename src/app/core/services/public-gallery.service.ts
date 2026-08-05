import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Observable, from, of, shareReplay } from 'rxjs';
import { FirebaseService } from '../../admin/services/firebase.service';
import { GalleryImage } from '../../admin/models/gallery-image.model';

@Injectable({ providedIn: 'root' })
export class PublicGalleryService {
  private firebase = inject(FirebaseService);
  private platformId = inject(PLATFORM_ID);

  private cache?: Observable<GalleryImage[]>;

  /**
   * All uploaded images, newest first. Returns [] during prerender since
   * Firestore is browser-only here. Shared so the gallery and packages pages
   * do not each pay for a read.
   */
  getAll(): Observable<GalleryImage[]> {
    if (!isPlatformBrowser(this.platformId)) return of([]);

    if (!this.cache) {
      const q = query(collection(this.firebase.db, 'gallery'), orderBy('createdAt', 'desc'));
      this.cache = from(
        getDocs(q).then(snap =>
          snap.docs.map(d => ({ id: d.id, ...d.data() }) as GalleryImage)
        )
      ).pipe(shareReplay({ bufferSize: 1, refCount: false }));
    }

    return this.cache;
  }
}
