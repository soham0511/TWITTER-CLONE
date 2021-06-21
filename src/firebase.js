// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "X",
    authDomain: "X",
    projectId: "X",
    storageBucket: "X",
    messagingSenderId: "X",
    appId: "X:X:X",
    measurementId: "X"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;
