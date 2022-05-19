import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/cart-context'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyButeLDhYvvQZ95XPCDwrARB955h-Od2DE",
  authDomain: "lovely-arenas.firebaseapp.com",
  projectId: "lovely-arenas",
  storageBucket: "lovely-arenas.appspot.com",
  messagingSenderId: "73406060632",
  appId: "1:73406060632:web:6dad64edf12e5df0e1d22d"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />

      </CartContextProvider>
      
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
