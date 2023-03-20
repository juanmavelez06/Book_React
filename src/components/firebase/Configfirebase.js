import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcv8zpSznTt2XTVxM37Yz5J5GjvlenV-M",
  authDomain: "libreria-react-f1af2.firebaseapp.com",
  projectId: "libreria-react-f1af2",
  storageBucket: "libreria-react-f1af2.appspot.com",
  messagingSenderId: "714139838687",
  appId: "1:714139838687:web:ec3e84ef8badacdfd4216a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);