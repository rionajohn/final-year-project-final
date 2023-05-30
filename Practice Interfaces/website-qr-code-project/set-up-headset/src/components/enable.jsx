import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const EnableSettingsStepCard = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Step 8: Enable Settings
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>
                        You have the option to enable speech on HoloLens 2
                    </p>
                    <p>
                        You have the option to enable location on HoloLens 2.
                    </p>
                    <p>
                        Select your telemetry level. If you can, please enable Optional telemetry.
                        This information really helps the HoloLens engineering team.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default EnableSettingsStepCard