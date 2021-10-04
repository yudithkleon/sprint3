
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAeVtHalWaCSOLUBWrp8LkOhFSgKu_RLGE",
  authDomain: "yadahlogin.firebaseapp.com",
  projectId: "yadahlogin",
  storageBucket: "yadahlogin.appspot.com",
  messagingSenderId: "377350405108",
  appId: "1:377350405108:web:e7d30be53b1813d587d7a1"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export{
    app, 
    google,
    db
}