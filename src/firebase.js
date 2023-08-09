import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_KEY,
  authDomain: "rentio-32618.firebaseapp.com",
  databaseURL: "https://rentio-32618-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rentio-32618",
  storageBucket: "rentio-32618.appspot.com",
  messagingSenderId: "434474456812",
  appId: "1:434474456812:web:f52cad82318b93ddafb7c9",
  measurementId: "G-RV12EZ3FF2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
