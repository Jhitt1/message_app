// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZNdlk2CueasNYqSXfxq-xGOlpTjqBK18",
  authDomain: "messaging-app-f49ce.firebaseapp.com",
  projectId: "messaging-app-f49ce",
  storageBucket: "messaging-app-f49ce.appspot.com",
  messagingSenderId: "492168396317",
  appId: "1:492168396317:web:07967d5b07772449af50f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseApp = initializeApp(firebaseConfig);