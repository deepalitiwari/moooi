// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADUpI2vaNGxoagBT5wfUxt8Tlzf2nfvkk",
  authDomain: "moooi-62491.firebaseapp.com",
  projectId: "moooi-62491",
  storageBucket: "moooi-62491.appspot.com",
  messagingSenderId: "361200498273",
  appId: "1:361200498273:web:f8e12fb22e9706a41c5c20",
  measurementId: "G-V2SW776PRV"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp)
const auth=getAuth();
export {db,auth}
// const analytics = getAnalytics(app);