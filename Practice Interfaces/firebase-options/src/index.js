import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';

import CreateAccount from './pages/createAccount';
import LoginForm from './pages/loginPage';
import Home from './pages/homePage';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="create-account" element={<CreateAccount />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="home" element={<Home />} />

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();