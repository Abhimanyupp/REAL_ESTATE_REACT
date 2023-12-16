// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-5e5da.firebaseapp.com",
  projectId: "mern-estate-5e5da",
  storageBucket: "mern-estate-5e5da.appspot.com",
  messagingSenderId: "647912831888",
  appId: "1:647912831888:web:ebbf2f163396692d539115"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);