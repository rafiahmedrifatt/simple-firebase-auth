// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCugM8J7FH4liqPMLJb0j9JfhsLPhKVhkY",
    authDomain: "simple-firebase-auth-23e11.firebaseapp.com",
    projectId: "simple-firebase-auth-23e11",
    storageBucket: "simple-firebase-auth-23e11.firebasestorage.app",
    messagingSenderId: "194018753020",
    appId: "1:194018753020:web:5b40c9fce522ab2e55da79"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);


export const auth = getAuth();