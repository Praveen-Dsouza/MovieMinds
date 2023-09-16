// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjYqQzN9O3bHqGd5dDpTsE-OJnh2vjkpQ",
  authDomain: "movie-minds.firebaseapp.com",
  projectId: "movie-minds",
  storageBucket: "movie-minds.appspot.com",
  messagingSenderId: "5677535989",
  appId: "1:5677535989:web:85689c4f54ea7eb9cdebbc",
  measurementId: "G-KH6Q7ZKGN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
