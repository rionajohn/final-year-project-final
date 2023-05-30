import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';
import { Wifi } from 'react-bootstrap-icons';

const NetworkStepCard = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Step 5: Connecting to the internet <Wifi style={{fontSize: "24", fontWeight: "bold"}} />
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>
                        Selcect Wfi or Ethernet Conection
                    </p>
                    <p>
                        HoloLens 2 will search and apply an Autopilot profile if one exists.
                        No action is needed on this screen.
                    </p>
                    <p>
                        Click Accept on the licensing screen.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default NetworkStepCard