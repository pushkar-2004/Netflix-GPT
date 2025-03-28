// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYG8NvsstIyhLfpfxwek5PO1uLktrKEB0",
  authDomain: "netflix-gpt-36f46.firebaseapp.com",
  projectId: "netflix-gpt-36f46",
  storageBucket: "netflix-gpt-36f46.firebasestorage.app",
  messagingSenderId: "507926262396",
  appId: "1:507926262396:web:542b0faff62e3369c60ff9",
  measurementId: "G-02XYVF0SYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 