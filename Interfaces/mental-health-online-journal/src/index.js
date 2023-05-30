import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import HelpHome from './pages/HelpHome';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/JournalHome';
import Journal from './pages/Journal';
import JounalHistory from './pages/JounalHistory';
import SettingsPage  from './pages/Settings';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/help-support" element={<HelpHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/journal-home" element={<Home />} />
      <Route path="/journal-new-entry" element={<Journal />} />
      <Route path="/history" element={<JounalHistory />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  </BrowserRouter>
);
