import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '../src/css/style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApiCall} from "gfdu";
import { BrowserRouter } from 'react-router-dom';
initializeApiCall(
  {
      "Content-Type":"application/json"
  }, 
  "https://reqres.in/api/",
  false,
  []
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
