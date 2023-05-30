import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container} from 'react-bootstrap';

import HeaderAndNavBar from '../components/header';
import AboutMeCard from '../components/about_me_card';

function AboutMe() {
  return (
    <div className="AboutMe">
      <HeaderAndNavBar />
      <h1>About Me</h1>
      <Container>
        <AboutMeCard />
      </Container>
    </div>
  );
}

export default AboutMe;