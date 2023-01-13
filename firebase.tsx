// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// import { firebase } from "firebase";
import App from "./pages/_app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7fbXLqhFxoWHnXf9lJjgQHEVrhfTOH20",
  authDomain: "fck-clone.firebaseapp.com",
  projectId: "fck-clone",
  storageBucket: "fck-clone.appspot.com",
  messagingSenderId: "1076476007388",
  appId: "1:1076476007388:web:7c0bbb6be63ed18018b519"
};

// Initialize Firebase
// const app = firebase.apps.length? initializeApp(firebaseConfig) : firebase.app();
const app = initializeApp(firebaseConfig) 
const db = getFirestore(app);
const storage = getStorage(app);
// const storage = firebase.storage();

export {db, storage}