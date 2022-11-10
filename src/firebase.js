// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2TnVfcxVIqezTagEhlcJit77Ef9HkIbc",
  authDomain: "dev-web-mobile-2445b.firebaseapp.com",
  projectId: "dev-web-mobile-2445b",
  storageBucket: "dev-web-mobile-2445b.appspot.com",
  messagingSenderId: "605741257496",
  appId: "1:605741257496:web:68ca4fc70de65c6b04046d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
