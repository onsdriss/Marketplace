import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAbS1O2LE6VNL0xUTdRtw-43wy6yAHV__E",
    authDomain: "newslettersubs.firebaseapp.com",
    projectId: "newslettersubs",
    storageBucket: "newslettersubs.appspot.com",
    messagingSenderId: "329175653885",
    appId: "1:329175653885:web:ef4eb0f26d0852251dcd94"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db