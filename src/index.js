import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4";
import { HashRouter } from "react-router-dom";
ReactGA.initialize("G-V49K3HKEMB");

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactGA.send({ hitType: "pageview",
  page: window.location.pathname});
root.render(
  <HashRouter>

    <App />
  </HashRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
