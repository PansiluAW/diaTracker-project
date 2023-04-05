import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBNKEOGrUmf4TCN1d1jCdv3WBcV220eRas",
  authDomain: "login-register-app-f5fbc.firebaseapp.com",
  projectId: "login-register-app-f5fbc",
  storageBucket: "login-register-app-f5fbc.appspot.com",
  messagingSenderId: "906586112805",
  appId: "1:906586112805:web:2b939dc34ccb897c4d90cc"
};

// Initialize the Firebase app using the configuration object
const app = initializeApp(firebaseConfig);
// Get the authentication object from the initialized Firebase app
export const auth = getAuth(app);
