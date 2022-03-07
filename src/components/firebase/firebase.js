// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtbg-ArtusM4jnFqEtavfc0_to2hiULdQ",
  authDomain: "coderhouse-reactjs-ed3c6.firebaseapp.com",
  projectId: "coderhouse-reactjs-ed3c6",
  storageBucket: "coderhouse-reactjs-ed3c6.appspot.com",
  messagingSenderId: "821794854594",
  appId: "1:821794854594:web:12d60e7e1ad6a50bcb0d5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDatabase = getFirestore(app);
