import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderAndNavBar from '../components/header.jsx';
import TipCardGrid from '../components/tip_grid';

export default function TipsAndTricks() {
  return (
    <div className="TipsAndTricks">
      <HeaderAndNavBar />
      <h1>Tips & Tricks</h1>
      <TipCardGrid />
    </div>
  );
}