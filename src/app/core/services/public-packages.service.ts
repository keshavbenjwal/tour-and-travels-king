import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Observable, from, of } from 'rxjs';
import { FirebaseService } from '../../admin/services/firebase.service';
import { AdminPackage } from '../../admin/models/admin-package.model';

@Injectable({ providedIn: 'root' })
export class PublicPackagesService {
  private firebase = inject(FirebaseService);
  private platformId = inject(PLATFORM_ID);

  getActive(): Observable<AdminPackage[]> {
    if (!isPlatformBrowser(this.platformId)) {
      return of([]);
    }
    const col = collection(this.firebase.db, 'packages');
    const q = query(col, where('active', '==', true));
    return from(
      getDocs(q).then(snap =>
        snap.docs
          .map(d => ({ id: d.id, ...d.data() } as AdminPackage))
          .sort((a, b) => (b.createdAt as any)?.seconds - (a.createdAt as any)?.seconds || 0)
      )
    );
  }
}
