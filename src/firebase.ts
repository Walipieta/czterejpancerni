import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA7gDUkhXUhQfWoWrNr2ZTdwubTdmCA0tU",
    authDomain: "todolist-122d4.firebaseapp.com",
    projectId: "todolist-122d4",
    storageBucket: "todolist-122d4.appspot.com",
    messagingSenderId: "986052362841",
    appId: "1:986052362841:web:ce5e90090df77fa446a748"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };