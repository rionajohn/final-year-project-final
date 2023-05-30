import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';
import { Magic } from 'react-bootstrap-icons';

const TipCard1 = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                <Magic style={{ fontSize: "20", fontWeight: "bold" }} /> Interacting with Images
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>
                        Slow with purpose means when looking around make sure the movements are gentle.
                    </p>
                    <p>
                        As well as any gestures to be firm and purposeful.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default TipCard1