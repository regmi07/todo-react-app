import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcyND9oRn0s56zllADKW2fDOeD6gB-Hos",
  authDomain: "todo-app-27680.firebaseapp.com",
  projectId: "todo-app-27680",
  storageBucket: "todo-app-27680.appspot.com",
  messagingSenderId: "481086292999",
  appId: "1:481086292999:web:6774ba6e6b5d88946d16a2",
  measurementId: "G-721H83JE1L"
});

const db = firebaseApp.firestore();

export {db};