// import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAz76vSldi9qM4UTz41iHq2foMyLL3Oark",
  authDomain: "reactproject-e0b6b.firebaseapp.com",
  projectId: "reactproject-e0b6b",
  storageBucket: "reactproject-e0b6b.appspot.com",
  messagingSenderId: "360240814259",
  appId: "1:360240814259:web:a69eba25824cca0b4638c6",
  measurementId: "G-B5NGGJDBZZ"
};

export default firebase.initializeApp(firebaseConfig)