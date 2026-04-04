import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// PLACEHOLDER CONFIG (Replace with real Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyPlaceholderKey_DO_NOT_USE_IN_PROD",
  authDomain: "political-party-app.firebaseapp.com",
  projectId: "political-party-app",
  storageBucket: "political-party-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789",
  measurementId: "G-ABCDEFGHIJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
