import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD0ygEs0WcgjF9IlcC5YjoTtjeKVvVX36o",
  authDomain: "the-board-project-e48f1.firebaseapp.com",
  projectId: "the-board-project-e48f1",
  storageBucket: "the-board-project-e48f1.appspot.com",
  messagingSenderId: "745347234801",
  appId: "1:745347234801:web:9423d1c06975940897e250"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();
