// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjRStjrNZ6cv8GXrnGYsIIzB-_OsMoVXc",
  authDomain: "the-dragon-news-client.firebaseapp.com",
  projectId: "the-dragon-news-client",
  storageBucket: "the-dragon-news-client.appspot.com",
  messagingSenderId: "644660044829",
  appId: "1:644660044829:web:4ff8405a28a266e26892f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
