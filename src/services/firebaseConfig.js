import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjNfSemFY1XjWcoQKAsz2wkEC5FGbbRhs",
  authDomain: "mealmaster-a0316.firebaseapp.com",
  projectId: "mealmaster-a0316",
  storageBucket: "mealmaster-a0316.firebasestorage.app",
  messagingSenderId: "1006923275397",
  appId: "1:1006923275397:web:07929f723883fdd9805dec",
  measurementId: "G-MR182PF5SX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);