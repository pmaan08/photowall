//import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAXv8Uqg-lKd1GONpEeXa29vPofcAb8IkM",
  authDomain: "photwall-d06dd.firebaseapp.com",
  databaseURL: "https://photwall-d06dd-default-rtdb.firebaseio.com",
  projectId: "photwall-d06dd",
  storageBucket: "photwall-d06dd.appspot.com",
  messagingSenderId: "1041233571533",
  appId: "1:1041233571533:web:1cd914d097c50fc43bc384",
  measurementId: "G-2CLL0YFMLL"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database} 
