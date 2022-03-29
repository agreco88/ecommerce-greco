// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";
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

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId
      ? query(
          collection(firestoreDatabase, "products"),
          where("category", "==", categoryId)
        )
      : collection(firestoreDatabase, "products");

    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        resolve(products);
      })
      .catch((error) => {
        reject("Error obteniendo productos: ", error);
      });
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const docRef = doc(firestoreDatabase, "products", productId);

    getDoc(docRef)
      .then((response) => {
        const product = { id: response.id, ...response.data() };
        resolve(product);
      })
      .catch((error) => {
        reject("Error obteniendo producto: ", error);
      });
  });
};
