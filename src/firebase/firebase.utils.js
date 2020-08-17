import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAufzzVU264Fxj8Uemw9c1lJ9ra2AlYB6E",
    authDomain: "anika-db.firebaseapp.com",
    databaseURL: "https://anika-db.firebaseio.com",
    projectId: "anika-db",
    storageBucket: "anika-db.appspot.com",
    messagingSenderId: "315305670281",
    appId: "1:315305670281:web:8004abc7d4539ce9dff858",
    measurementId: "G-RNE8B9YYN3"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
