import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxBlfVCJNOuuKcBscfh389mOWdPXpQyNQ",
  authDomain: "rentio-test.firebaseapp.com",
  projectId: "rentio-test",
  storageBucket: "rentio-test.appspot.com",
  messagingSenderId: "693922226698",
  appId: "1:693922226698:web:11661ef0515c0f74dbb5f3",
  measurementId: "G-158FCWF38X",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
