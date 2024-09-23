// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa1AWDRlqMtevu5p3WHjkdKC7Qn19DA5c",
  authDomain: "sonnn-e81e3.firebaseapp.com",
  projectId: "sonnn-e81e3",
  storageBucket: "sonnn-e81e3.appspot.com",
  messagingSenderId: "483286287262",
  appId: "1:483286287262:web:9901182998ead7c82e4c8f",
  measurementId: "G-Y4THSPKEVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);