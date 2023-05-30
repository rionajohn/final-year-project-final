import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';

import AboutMe from './pages/AboutMe';
import StepByStep from './pages/StepByStep';
import TipsAndTricks from './pages/TipsAndTricks';
import FindOutMore from './pages/FindOutMore';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="step-by-step" element={<StepByStep />} />
      <Route path="tips-and-tricks" element={<TipsAndTricks />} />
      <Route path="find-out-more" element={<FindOutMore />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
