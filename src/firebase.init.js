// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXbH5trUM1c33vhvyBeJMVzkMgA6JYmg0",
  authDomain: "moduil-59.firebaseapp.com",
  projectId: "moduil-59",
  storageBucket: "moduil-59.appspot.com",
  messagingSenderId: "153206630272",
  appId: "1:153206630272:web:54654ac2d3f894ffba8365"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;