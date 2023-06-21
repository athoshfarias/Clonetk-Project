// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCFRVRi4bInAH1NbT7i1ZRtqJagYAFSpJ4",
  authDomain: "tiktok---clone-f0b75.firebaseapp.com",
  projectId: "tiktok---clone-f0b75",
  storageBucket: "tiktok---clone-f0b75.appspot.com",
  messagingSenderId: "816592006646",
  appId: "1:816592006646:web:8359287fbfa61166caabd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;