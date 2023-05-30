import React from 'react';

import '../css_componets/card_css.css';

import { Container, Row, Col } from 'react-bootstrap';

import TipCard1 from './tip_card_1';
import TipCard2 from './tip_card_2';


const TipCardGrid = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <TipCard1 />
                </Col>
                <br />
                <Col>
                    <TipCard2 />
                </Col>
            </Row>
        </Container>
    )
}
export default TipCardGrid