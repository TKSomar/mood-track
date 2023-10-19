// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_aqF_2JlPSJmtmAGHXIfZ2uJAfupb5Lc",
  authDomain: "mood-track-d1bd3.firebaseapp.com",
  projectId: "mood-track-d1bd3",
  storageBucket: "mood-track-d1bd3.appspot.com",
  messagingSenderId: "128892360521",
  appId: "1:128892360521:web:ba3acf8f32a0a83c102c98",
  measurementId: "G-J35W4F8CJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);