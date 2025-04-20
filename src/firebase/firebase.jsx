/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHM6KyAonI4cv-n6nZKQ2YarTyEdQvfTk",
  authDomain: "abcd-a57c5.firebaseapp.com",
  projectId: "abcd-a57c5",
  storageBucket: "abcd-a57c5.firebasestorage.app",
  messagingSenderId: "301716834772",
  appId: "1:301716834772:web:0a65c34852b29566ce2e41",
  measurementId: "G-J4KM60WVLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const analytics = getAnalytics(app);

export {auth};