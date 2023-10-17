// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3rsEalEJvdNBok8sCaHKYZO2YlXASnis",
  authDomain: "summarist-a235b.firebaseapp.com",
  projectId: "summarist-a235b",
  storageBucket: "summarist-a235b.appspot.com",
  messagingSenderId: "965390521602",
  appId: "1:965390521602:web:e959c9928c1e645dce9e1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};

export const auth = getAuth(app);
