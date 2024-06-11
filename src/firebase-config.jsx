// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyENnDIJH7vNqzCqc3Bs4CbNtokc8M5h8",
  authDomain: "roostechdashboard.firebaseapp.com",
  projectId: "roostechdashboard",
  storageBucket: "roostechdashboard.appspot.com",
  messagingSenderId: "485381350196",
  appId: "1:485381350196:web:433b6f29b5272a4dd47b61",
  measurementId: "G-92WWP7C40Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);