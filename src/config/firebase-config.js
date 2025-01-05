// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiR8MUH1Lxp2-vLejGg6h6edQio4OWIw4",
  authDomain: "next-project-b5e8e.firebaseapp.com",
  projectId: "next-project-b5e8e",
  storageBucket: "next-project-b5e8e.firebasestorage.app",
  messagingSenderId: "159402105093",
  appId: "1:159402105093:web:0b9a42e1ff98695a9d3f6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
