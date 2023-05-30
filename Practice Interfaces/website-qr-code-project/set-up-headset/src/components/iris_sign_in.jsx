import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const IrisStepCard = () => {
    return (
        <Card className="Iris">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Step 7: Iris Sign In
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>
                        It's a simmilar experience to the eye calibration.
                    </p>
                    <p>
                        Don't worry you can skip the step and create a pin instead.
                    </p>
                    <p>
                        Click Next to proceed to a scan and then Done to finish the process.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default IrisStepCard