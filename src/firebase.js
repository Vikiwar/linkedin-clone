import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDawgFjMoz-ugrmDnY_NIROOeZzygRgATA",
  authDomain: "linkedin-clone-767e0.firebaseapp.com",
  projectId: "linkedin-clone-767e0",
  storageBucket: "linkedin-clone-767e0.appspot.com",
  messagingSenderId: "91420764047",
  appId: "1:91420764047:web:b1bd1336bf52110797cdfa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
