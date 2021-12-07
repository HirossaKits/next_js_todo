
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});
export const firebaseAuth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const providerGoogle = new GoogleAuthProvider();
export const providerGitHub = new GithubAuthProvider();

export const signInWithGoogle = () => {
  signInWithRedirect(firebaseAuth, providerGoogle)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log(credential);
    })
    .catch((error) => {
      console.log(error.Code);
    });
};;

export const signInWithGitHub = () => {
  const gitProvider = new GithubAuthProvider();
  signInWithRedirect(firebaseAuth, providerGitHub)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log(credential);
    })
    .catch((error) => {
      console.log(error.Code);
    });
};


export const signOutFromAll = () => {
  signOut(firebaseAuth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error.Code);
  });
};

