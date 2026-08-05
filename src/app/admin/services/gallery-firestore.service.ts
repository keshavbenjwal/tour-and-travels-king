import { Injectable, inject } from '@angular/core';
import {
  collection, doc, addDoc, deleteDoc, updateDoc,
  serverTimestamp, query, orderBy, onSnapshot,
  DocumentData, CollectionReference
} from 'firebase/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { GalleryImage } from '../models/gallery-image.model';

@Injectable({ providedIn: 'root' })
export class GalleryFirestoreService {
  private firebase = inject(FirebaseService);

  private get col(): CollectionReference<DocumentData> {
    return collection(this.firebase.db, 'gallery');
  }

  getAll(): Observable<GalleryImage[]> {
    const q = query(this.col, orderBy('createdAt', 'desc'));
    return new Observable(observer => {
      const unsub = onSnapshot(
        q,
        snapshot => {
          observer.next(
            snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as GalleryImage[]
          );
        },
        err => observer.error(err)
      );
      return () => unsub();
    });
  }

  add(image: Omit<GalleryImage, 'id' | 'createdAt'>): Promise<void> {
    return addDoc(this.col, { ...image, createdAt: serverTimestamp() })
      .then(() => undefined);
  }

  update(id: string, changes: Partial<GalleryImage>): Promise<void> {
    const { id: _id, createdAt: _c, ...data } = changes as GalleryImage;
    return updateDoc(doc(this.firebase.db, 'gallery', id), { ...data });
  }

  delete(id: string): Promise<void> {
    return deleteDoc(doc(this.firebase.db, 'gallery', id));
  }
}
