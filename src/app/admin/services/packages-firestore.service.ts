import { Injectable, inject } from '@angular/core';
import {
  collection, doc, addDoc, updateDoc, deleteDoc,
  serverTimestamp, query, orderBy, onSnapshot, DocumentData, CollectionReference
} from 'firebase/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { AdminPackage } from '../models/admin-package.model';

@Injectable({ providedIn: 'root' })
export class PackagesFirestoreService {
  private firebase = inject(FirebaseService);

  private get col(): CollectionReference<DocumentData> {
    return collection(this.firebase.db, 'packages');
  }

  getAll(): Observable<AdminPackage[]> {
    const q = query(this.col, orderBy('createdAt', 'desc'));
    return new Observable(observer => {
      const unsub = onSnapshot(
        q,
        snapshot => {
          const pkgs = snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as AdminPackage[];
          observer.next(pkgs);
        },
        err => observer.error(err)
      );
      return () => unsub();
    });
  }

  add(pkg: Omit<AdminPackage, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> {
    return addDoc(this.col, {
      ...pkg,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    }).then(() => undefined);
  }

  update(id: string, pkg: Partial<AdminPackage>): Promise<void> {
    const ref = doc(this.firebase.db, 'packages', id);
    const { id: _id, createdAt: _c, ...data } = pkg as AdminPackage;
    return updateDoc(ref, { ...data, updatedAt: serverTimestamp() });
  }

  delete(id: string): Promise<void> {
    return deleteDoc(doc(this.firebase.db, 'packages', id));
  }
}
