// Import the functions you need from the SDKs you need
import "firebase/compat/app";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmJs9Ba3vZOEe4rFpji77obYCB2JHoTAk",
  authDomain: "shopjs23.firebaseapp.com",
  projectId: "shopjs23",
  storageBucket: "shopjs23.appspot.com",
  messagingSenderId: "316651849294",
  appId: "1:316651849294:web:305f4071500f907a66251f",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
