// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
} from 'firebase/firestore';

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
// eslint-disable-next-line no-unused-vars
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

//database singleton class for access
export const db = getFirestore();

export const createUserDoc = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  //doc(databaseIdentifier, Collection, DocumentIdentifier)
  const userDocRef = doc(db, 'users', userAuth.uid);

  //Returns an object regardless of existence or not.
  const userSnapshot = await getDoc(userDocRef);

  //userSnapshot.exists() will return if exists or not, hence you can check if user exists or not
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //set the document with the new user. Create the collection and user
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('Error creating user: ', error);
    }
  }

  //if already exists, return userDocRef, if not, make and then return userDocRef
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshpt = await getDocs(q);
  const categoryMap = querySnapshpt.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
