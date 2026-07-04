// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mockmate-d4604.firebaseapp.com",
  projectId: "mockmate-d4604",
  storageBucket: "mockmate-d4604.firebasestorage.app",
  messagingSenderId: "986082903044",
  appId: "1:986082903044:web:d834fc367c000af2f76151"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };