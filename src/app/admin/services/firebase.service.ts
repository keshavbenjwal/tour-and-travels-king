import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { initializeApp, FirebaseApp, getApps } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../../../environments/firebase.config';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  private platformId = inject(PLATFORM_ID);
  private _app: FirebaseApp | null = null;
  private _auth: Auth | null = null;
  private _firestore: Firestore | null = null;

  get app(): FirebaseApp {
    if (!this._app) {
      const existing = getApps();
      this._app = existing.length ? existing[0] : initializeApp(firebaseConfig);
    }
    return this._app;
  }

  get auth(): Auth {
    if (!this._auth) {
      this._auth = getAuth(this.app);
    }
    return this._auth;
  }

  get db(): Firestore {
    if (!this._db) {
      this._db = getFirestore(this.app);
    }
    return this._db;
  }

  private _db: Firestore | null = null;

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
