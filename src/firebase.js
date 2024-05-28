import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOUUlxx_uYKGyu6X8p-L6kS-h4DXe3veA",
  authDomain: "real-time-chat-54cda.firebaseapp.com",
  databaseURL: "https://real-time-chat-54cda-default-rtdb.firebaseio.com",
  projectId: "real-time-chat-54cda",
  storageBucket: "real-time-chat-54cda.appspot.com",
  messagingSenderId: "790876701967",
  appId: "1:790876701967:web:c548992c06b78d180cea7a",
  measurementId: "G-L9VD1N3DEC",
};

const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
