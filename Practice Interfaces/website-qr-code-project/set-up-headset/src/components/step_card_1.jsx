import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const StepCard1 = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Step 1: Make sure you have the following below
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <li>A network connection</li>
                    <li>A Microsoft account</li>
                    <li>A safe space with no tripping hazzards</li>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default StepCard1