// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAbmZq2_onvufT5Q0eOBm_y7BSSbBx9Rxc",
    authDomain: "twitter-clone-a14ff.firebaseapp.com",
    projectId: "twitter-clone-a14ff",
    storageBucket: "twitter-clone-a14ff.appspot.com",
    messagingSenderId: "764323288566",
    appId: "1:764323288566:web:14762f630ea136e78263d7",
    measurementId: "G-J1KFMJQHXY"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;