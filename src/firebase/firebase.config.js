// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxbOMlPEiJbzVQRDQUtvIU4S0-0PZwBGE",
  authDomain: "auth-firebase-context-ta-e3cf1.firebaseapp.com",
  projectId: "auth-firebase-context-ta-e3cf1",
  storageBucket: "auth-firebase-context-ta-e3cf1.appspot.com",
  messagingSenderId: "193273949953",
  appId: "1:193273949953:web:83a3cac23fdf396716b500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;