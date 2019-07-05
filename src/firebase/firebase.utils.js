import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBLwaeuXx1Tebr6cTkA9b7AaXqws2yj2HE',
  authDomain: 'crwn-db-af764.firebaseapp.com',
  databaseURL: 'https://crwn-db-af764.firebaseio.com',
  projectId: 'crwn-db-af764',
  storageBucket: '',
  messagingSenderId: '820712289601',
  appId: '1:820712289601:web:e73d63593c18e6d6'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
