import React from 'react';

import '../css_componets/card_css.css';

import { Card, Container, Row, Col } from 'react-bootstrap';

import SignInSchoolOrWork from './sign_in_schwork';
import SignInPersonal from './sign_in_personal';

const SignInStepCard = () => {
    return (
        <Card className="SignIn">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Step 6: Sign In School/Work or with your Personal Microsoft account
            </Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <SignInSchoolOrWork />
                        </Col>
                        <Col>
                            <SignInPersonal />
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}
export default SignInStepCard