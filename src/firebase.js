import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAn8ykC1oZPrwmC1gyq4aaOG15XGnNmEn8",
  authDomain: "cloneio.firebaseapp.com",
  projectId: "cloneio",
  storageBucket: "cloneio.appspot.com",
  messagingSenderId: "189073296361",
  appId: "1:189073296361:web:fe83169c5df1700f9a1978",
  measurementId: "G-ZMS8ZE9X4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// Login With Email and Password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.message);
  }
};

// Register with Email and Password
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
  } catch (err) {
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { db, auth, logInWithEmailAndPassword, registerWithEmailAndPassword, logout };