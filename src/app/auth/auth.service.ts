import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { switchMap, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    // TODO add User (Student extending User) data model with all the necessary fields
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    userRef
      .update(data)
      .then(() => {})
      .catch((_) => {
        userRef.set({ ...data, isOnBoard: false });
      });
  }

  onboard() {
    this.user$.pipe(take(1)).subscribe((user) => {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      userRef.update({ ...user, isOnBoard: true });
      this.router.navigate(['courses']);
    });
  }

  async signOut() {
    await this.afAuth.signOut();
    await this.router.navigate(['/']);
  }
}
