import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row } from 'react-bootstrap';

import HeaderAndNavBar from '../components/header';
import DesignThinkCard from '../components/design_thinking';
import WebsiteCard from '../components/website_card';
import CameraCard from '../components/camera_card';
import MentorCard from '../components/mentor_card';

export default function FindOutMore() {
  return (
    <div className="FindOutMore">
      <HeaderAndNavBar />
      <h1>Find Out More</h1>
      <Container>
        <Row>
          <DesignThinkCard />
        </Row>
        <br />
        <Row>
          <WebsiteCard />
        </Row>
        <br />
        <Row>
          <CameraCard />
        </Row>
        <h1>Overall Internship Experience</h1>
        <br />
        <Row>
          <MentorCard />
        </Row>
      </Container>
    </div>
  );
}