import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "instock-app-616f1.firebaseapp.com",
  projectId: "instock-app-616f1",
  storageBucket: "instock-app-616f1.appspot.com",
  messagingSenderId: "xxx",
  appId: "1:xx:web:xxx",
  measurementId: "G-79BQVKMPSR"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth };
export default db;
