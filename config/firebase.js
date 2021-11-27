import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "#######################################",
  authDomain: "#######################################",
  projectId: "#######################################",
  storageBucket: "#######################################",
  messagingSenderId: "#######################################",
  appId: "#######################################",
};

initializeApp(firebaseConfig);

export {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
};
