import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCONNbLVmHng_5GlNo3u9w-TgWYerPbsds",
  authDomain: "carrito-c34f0.firebaseapp.com",
  projectId: "carrito-c34f0",
  storageBucket: "carrito-c34f0.appspot.com",
  messagingSenderId: "716152685730",
  appId: "1:716152685730:web:565d6bafb87a9fced7c3fb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
