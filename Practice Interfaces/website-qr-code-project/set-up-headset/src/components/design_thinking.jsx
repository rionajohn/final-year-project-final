import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const DesignThinkCard = () => {
    return (
        <Card className = "findOutMore">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Design Thinking Process
            </Card.Header>
            <Card.Body>
                <p>
                    Once we researched about certain start ups and also played around with the camera provided.
                    Me and Aoife needed to create an idea so we did different design techniques to 
                    narrow what we wanted to achieve within 3 weeks and would be able to produce a project deliverable.
                </p>
            </Card.Body>
        </Card>
    )
}
export default DesignThinkCard