import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDMj668KqB6JY5SgdbhMtKWvFZfVKZjAd8',
  authDomain: 'crwn-db-65109.firebaseapp.com',
  projectId: 'crwn-db-65109',
  storageBucket: 'crwn-db-65109.appspot.com',
  messagingSenderId: '368191055538',
  appId: '1:368191055538:web:5f4be77d9dea8752120bab',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
