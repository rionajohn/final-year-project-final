import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import HeaderAndNavBar from '../components/header';
import ImageCarousel from '../components/carousel';
import StepCard1 from '../components/step_card_1';
import StepCard2 from '../components/step_card_2';
import StepCard3 from '../components/step_card_3';
import StepCard4 from '../components/step_card_4';
import CalibrationImg from '../components/calibration_img';
import NetworkStepCard from '../components/step_card_network';
import LicenseImg from '../components/license_img';
import SignInStepCard from '../components/step_card_signin';
import SignInDeviceStepCard from '../components/device_signin';
import EnableSettingsStepCard from '../components/enable';
import DirectToTips from '../components/go_to_tips';

function StepByStep() {
  return (
    <div className="StepByStep">
      <HeaderAndNavBar />
      <Container>
        <Row>
          <Col>
            <h1>Step by Step Guide</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col><StepCard1 /></Col>
        </Row>
        <br />
        <Row>
          <Col><StepCard2 /></Col>
        </Row>
        <br />
        <Row>
          <Col><ImageCarousel /></Col>
        </Row>
        <br />
        <Row>
          <Col><StepCard3 /></Col>
        </Row>
        <br />
        <Row>
          <Col><StepCard4 /></Col>
          <Col><CalibrationImg /></Col>
        </Row>
        <br />
        <Row>
          <Col><NetworkStepCard /></Col>
          <Col><LicenseImg /></Col>
        </Row>
        <br />
        <Row>
          <Col><SignInStepCard /></Col>
        </Row>
        <br />
        <Row>
          <Col><SignInDeviceStepCard /></Col>
        </Row>
        <br />
        <Row>
          <Col><EnableSettingsStepCard /></Col>
        </Row>
        <br />
        <Row>
          <Col><DirectToTips /></Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default StepByStep;