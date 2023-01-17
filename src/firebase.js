// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyCXVPUB1hZbiEHqPfC1AoDLRjiWztqHJVU",
  authDomain:"netflix-1f2ba.firebaseapp.com",
  projectId:"netflix-1f2ba",
  storageBucket: "netflix-1f2ba.appspot.com",
  messagingSenderId: "191451211789",
  appId:"1:191451211789:web:e6d17c42cd854b6d3c8d44",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);