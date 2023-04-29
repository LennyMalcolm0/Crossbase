import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAfsvzEC5bVlU_xQAs8KB9ShMymQJC0evQ",
  authDomain: "crossbase-mvp.firebaseapp.com",
  projectId: "crossbase-mvp",
  storageBucket: "crossbase-mvp.appspot.com",
  messagingSenderId: "472027224474",
  appId: "1:472027224474:web:7ab2506b565141f756c223",
  measurementId: "G-G516QR7R66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(),
user: any | null = auth.currentUser,
database = getFirestore();