// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX_1NvtxrppMg6q1y2o5S-IaadIIDMhhc",
  authDomain: "music-player-e2374.firebaseapp.com",
  projectId: "music-player-e2374",
  storageBucket: "music-player-e2374.firebasestorage.app",
  messagingSenderId: "1048144362499",
  appId: "1:1048144362499:web:32dc8f041a5f5a89b82236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export {app,auth};