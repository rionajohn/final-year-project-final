import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const StepCard3 = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Step 3: Set Up Language and Region
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>There will be a list of languages, pick your most preferred one.</p>
                    <p>Once you click Next, there will be a list of region, pick yours, click Next again.</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default StepCard3