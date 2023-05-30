import React from 'react';

import '../css_componets/card_css.css';

import { Card, Container, Row, Col } from 'react-bootstrap';

import IrisStepCard from './iris_sign_in';
import PinStepCard from './pin_set_up';

const SignInDeviceStepCard = () => {
    return (
        <Card className="SignInDevice">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Step 7: Sign In To Device
            </Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <IrisStepCard />
                        </Col>
                        <Col>
                            <PinStepCard />
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}
export default SignInDeviceStepCard