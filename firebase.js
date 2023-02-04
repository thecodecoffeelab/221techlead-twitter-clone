// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiozMUwiqQuheqncn2ws0V-C5etxyKLHk",
    authDomain: "new-twitter-clone-a56d4.firebaseapp.com",
    projectId: "new-twitter-clone-a56d4",
    storageBucket: "new-twitter-clone-a56d4.appspot.com",
    messagingSenderId: "969693980889",
    appId: "1:969693980889:web:d8fa7be9f2dd3faeae76c8",
    measurementId: "G-ZTR18FTHF8"
  };


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };