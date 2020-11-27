import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from "../shared/user";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone 
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // connexion avec mail
  SignIn(email, password) {
    return this.ngFireAuth.auth.signInWithEmailAndPassword(email, password)
  }

  // enregistrer avec mail et mdp
  RegisterUser(email, password) {
    return this.ngFireAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  // verification par mail
  SendVerificationMail() {
    return this.ngFireAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email']);
    })
  }

  // recuperation mdp par mail
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('nouveau mdp envoyé sur votre mail');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // retourne bool true quand user est connecter
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // retourne bool true quand le mail est verifier
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  // connection avec gmail
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // fournisseurs d'authentification
  AuthLogin(provider) {
    return this.ngFireAuth.auth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  // stocker l'utilisateur dans localStorage
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // deconnecion 
  SignOut() {
    return this.ngFireAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

}