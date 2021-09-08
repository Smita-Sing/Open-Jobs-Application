import app from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCEjIyawNZLqwlwb-p3r8rwxpZy5_EXZXM",
    authDomain: "open-job-b9c51.firebaseapp.com",
    projectId: "open-job-b9c51",
    storageBucket: "open-job-b9c51.appspot.com",
    messagingSenderId: "1046984989639",
    appId: "1:1046984989639:web:d20bea71ecd25406d217e2"
  };
  // Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export {firebase, firestore, app}