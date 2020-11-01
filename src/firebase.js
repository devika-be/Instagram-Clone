import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBp3pP0GeWs3FBahxRWleSTMAnEZZ2tqZI",
  authDomain: "instagram-clone-86cf5.firebaseapp.com",
  databaseURL: "https://instagram-clone-86cf5.firebaseio.com",
  projectId: "instagram-clone-86cf5",
  storageBucket: "instagram-clone-86cf5.appspot.com",
  messagingSenderId: "1037460570779",
  appId: "1:1037460570779:web:9175c38a0d1039c0b2bc3e",
  measurementId: "G-1L0D05LTSH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
