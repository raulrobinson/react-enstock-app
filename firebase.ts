import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHhk9ga2cgmyety7enxjDUuCPdHPODimc",
  authDomain: "instock-app-616f1.firebaseapp.com",
  projectId: "instock-app-616f1",
  storageBucket: "instock-app-616f1.appspot.com",
  messagingSenderId: "1029048116094",
  appId: "1:1029048116094:web:577b057fd4516f575a492f",
  measurementId: "G-79BQVKMPSR"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth };
export default db;
