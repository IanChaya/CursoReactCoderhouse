import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpmgSd8ljIVo6pKI8M35jXu_jonrzBd4c",
  authDomain: "proyecto-final-react-ianchaya.firebaseapp.com",
  projectId: "proyecto-final-react-ianchaya",
  storageBucket: "proyecto-final-react-ianchaya.appspot.com",
  messagingSenderId: "742136698701",
  appId: "1:742136698701:web:423e53aa6546811234c904"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
