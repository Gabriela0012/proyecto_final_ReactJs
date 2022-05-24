import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyButeLDhYvvQZ95XPCDwrARB955h-Od2DE",
  authDomain: "lovely-arenas.firebaseapp.com",
  projectId: "lovely-arenas",
  storageBucket: "lovely-arenas.appspot.com",
  messagingSenderId: "73406060632",
  appId: "1:73406060632:web:6dad64edf12e5df0e1d22d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db