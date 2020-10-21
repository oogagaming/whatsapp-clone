import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDK8ndB90HPvgKPvUqn2o4GD6ANjw_6IFc",
    authDomain: "whatsapp-clone-c881d.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-c881d.firebaseio.com",
    projectId: "whatsapp-clone-c881d",
    storageBucket: "whatsapp-clone-c881d.appspot.com",
    messagingSenderId: "367026660195",
    appId: "1:367026660195:web:a169f7dcb5e0db3d616956",
    measurementId: "G-E0E6Z1E30Y"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider };
export default db;