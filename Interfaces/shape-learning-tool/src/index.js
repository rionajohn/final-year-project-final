import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import InfoPage from './pages/InfoPage';
import LearnShapePage from './pages/Shapes';

import SquareShape from './pages/SquareShape';
import TriangleShape from './pages/TriangleShape';
import CircleShape from './pages/CircleShape';
import HeartShape from './pages/HeartShape';
import RectangleShape from './pages/RectangleShape';
import StarShape from './pages/StarShape';
import QuizPage from './pages/QuizPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/learn-shapes" element={<LearnShapePage />} />
      <Route path="/quiz" element={<QuizPage />} />

      {/* individual shape pages for learning */}
      <Route path="/learn-shapes-square" element={<SquareShape />} />
      <Route path="/learn-shapes-triangle" element={<TriangleShape />} />
      <Route path="/learn-shapes-circle" element={<CircleShape />} />
      <Route path="/learn-shapes-heart" element={<HeartShape />} />
      <Route path="/learn-shapes-rectangle" element={<RectangleShape />} />
      <Route path="/learn-shapes-star" element={<StarShape />} />
    </Routes>
  </BrowserRouter>
);
