import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { FirebaseService } from './firebase.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private firebase = inject(FirebaseService);
  private router = inject(Router);

  currentUser = signal<User | null>(null);
  isLoggedIn = signal(false);
  isChecked = signal(false);

  constructor() {
    if (this.firebase.isBrowser) {
      onAuthStateChanged(this.firebase.auth, user => {
        this.currentUser.set(user);
        this.isLoggedIn.set(!!user);
        this.isChecked.set(true);
      });
    }
  }

  async signIn(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.firebase.auth, email, password);
  }

  async signOut(): Promise<void> {
    await signOut(this.firebase.auth);
    this.router.navigate(['/admin/login']);
  }

  get userEmail(): string {
    return this.currentUser()?.email ?? '';
  }
}
