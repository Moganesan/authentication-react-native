import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF512VXQt0Si1YbDmsJuQKDKGeQWBtSqc",
  authDomain: "authentication-system-df778.firebaseapp.com",
  projectId: "authentication-system-df778",
  storageBucket: "authentication-system-df778.appspot.com",
  messagingSenderId: "899848361501",
  appId: "1:899848361501:web:a01a846f2466d7e01158f4",
};

initializeApp(firebaseConfig);

export {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
};
