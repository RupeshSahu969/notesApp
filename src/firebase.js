import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC-32x3cRV5MukiNbql3tumKldWtF19DU8",
  authDomain: "recat-firebase-auth-c2dc0.firebaseapp.com",
  projectId: "recat-firebase-auth-c2dc0",
  storageBucket: "recat-firebase-auth-c2dc0.appspot.com",
  messagingSenderId: "563206552068",
  appId: "1:563206552068:web:a6b307e309eda511495351",
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, db }