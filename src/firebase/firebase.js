import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBuVRX6dKvJLyFzkwecrC_dSMLQpiYAyNQ",
  authDomain: "audit-polimi.firebaseapp.com",
  projectId: "audit-polimi",
  storageBucket: "audit-polimi.appspot.com",
  messagingSenderId: "974208324120",
  appId: "1:974208324120:web:6c0ca473952be3da06a96d",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
