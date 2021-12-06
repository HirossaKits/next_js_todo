
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
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
export const provider = new GoogleAuthProvider();

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// auth.languageCode = 'ja';
// export const googleLogin = async () => {
//   await signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log('google resolved');
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential?.accessToken;
//       const user = result.user;
//       const additional = getAdditionalUserInfo(result);
//       console.log("credential", credential);
//       console.log("additional", additional);
//     })
//     .catch((e: any) => {
//       alert(e.message);
//     });
// };


