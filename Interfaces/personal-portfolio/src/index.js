import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import ProjectShowcasePage from './pages/projectShowcasePage';
import AllProjectsPage from './pages/allProjectPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<ProjectShowcasePage />} />
      <Route path="/all-projects" element={<AllProjectsPage />} />
    </Routes>
  </BrowserRouter>
);
