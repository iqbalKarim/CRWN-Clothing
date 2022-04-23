// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBzA6ZhQDSV6xPSnFt559PJdGepCT1inDA',
  authDomain: 'crwn-clothing-db-4f19c.firebaseapp.com',
  projectId: 'crwn-clothing-db-4f19c',
  storageBucket: 'crwn-clothing-db-4f19c.appspot.com',
  messagingSenderId: '1079016495469',
  appId: '1:1079016495469:web:0f949dd9e282ee240f2264',
};

// Initialize Firebase, connects to the database that you registered to this app
const app = initializeApp(firebaseConfig);

//gets provider, kinda basic and monotonous. Might need multiple providers
//Used for redirecting to google and all. These are the providers we can use for auth control
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

//The auth settings and singleton class
export const auth = getAuth();
//The provider user here. We will use this to redirect to google and signIn using those
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
