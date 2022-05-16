import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDMsJmuvHDQnRNK0UX7ESMWdUjJ_2dLs_w",
  authDomain: "karinan-ovipuhelin.firebaseapp.com",
  projectId: "karinan-ovipuhelin",
  storageBucket: "karinan-ovipuhelin.appspot.com",
  messagingSenderId: "898184301336",
  appId: "1:898184301336:web:2503b29585d32398116c6d",
  measurementId: "G-SJDW4FDZXH",
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
