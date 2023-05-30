import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container} from 'react-bootstrap';

import HeaderAndNavBar from './components/header';
import HomePageCard from './components/home_card';

function App() {
  return (
    <div className="App">
      <HeaderAndNavBar />

      <Container>
        <HomePageCard />
      </Container>
    </div>
  );
}

export default App;
