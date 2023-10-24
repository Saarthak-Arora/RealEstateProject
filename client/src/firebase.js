// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-9e474.firebaseapp.com",
  projectId: "real-estate-9e474",
  storageBucket: "real-estate-9e474.appspot.com",
  messagingSenderId: "819407353851",
  appId: "1:819407353851:web:1933c76c52dc6f39af3d5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);