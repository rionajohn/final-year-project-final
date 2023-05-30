import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const PinStepCard = () => {
    return (
        <Card className="Pin">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Step 8: Create a PIN
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>
                        This PIN is device specific.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default PinStepCard