import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBLn2AGVQ8oqkk9pcSYmFXQLzTqYHC39g",
  authDomain: "uber-clone-365c4.firebaseapp.com",
  projectId: "uber-clone-365c4",
  storageBucket: "uber-clone-365c4.appspot.com",
  messagingSenderId: "213938727115",
  appId: "1:213938727115:web:46077d1b7233d086fb534e",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
