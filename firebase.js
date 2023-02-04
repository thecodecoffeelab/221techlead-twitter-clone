// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRH8oz1d0fzJWQOQBU5gLIF6W7lJzeihw",
  authDomain: "twitter221techlead.firebaseapp.com",
  projectId: "twitter221techlead",
  storageBucket: "twitter221techlead.appspot.com",
  messagingSenderId: "655432848421",
  appId: "1:655432848421:web:22210ba8e07fb368d01bcc",
  measurementId: "G-8FJRZKPZGG"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
