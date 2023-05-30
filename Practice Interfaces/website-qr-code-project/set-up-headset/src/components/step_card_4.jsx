import React from 'react';

import '../css_componets/card_css.css';
import '../css_componets/image.css';

import { Card, Container, Row, Col } from 'react-bootstrap';

import { ExclamationTriangle, Magic } from 'react-bootstrap-icons';

const StepCard4 = () => {
    return (
        <Card className="Important">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Step 4: Calibrating the HoloLens to your eyes
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <Container>
                        <Row>
                            <Col>
                                <p>
                                    <a href="http://localhost:3000/tips-and-tricks">
                                        <Magic style={{ fontSize: "20", fontWeight: "bold", color: "white" }} />
                                    </a>
                                    The first step is to adjust your visor.
                                    (Make sure the visor is pushed fully down and in,
                                    so you can see all four corners.)
                                </p>
                                <p>
                                    To calibrate, your eyes will be looking at different targets (gems).
                                </p>
                                <p>
                                    <ExclamationTriangle style={{ fontSize: "20", fontWeight: "bold" }} /> It's fine if you blink or close your eyes during
                                    calibration, but try not to stare at other objects in the room or physical space.
                                </p>
                                <p>
                                    <ExclamationTriangle style={{ fontSize: "20", fontWeight: "bold" }} /> Please try to not move your head as much and only move your eyes where possible.
                                </p>
                                <p>
                                    HoloLens uses this process to learn your unique eye position
                                    so that you can see your holographic world more clearly.
                                </p>
                                <p>
                                    After calibration, holograms will appear correctly
                                    even as the visor shifts on your head. As seen to the right.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default StepCard4