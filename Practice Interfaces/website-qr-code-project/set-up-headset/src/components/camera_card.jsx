import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const CameraCard = () => {
    return (
        <Card className="findOutMore">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Luxonis Camera using DepthAi Libaries on Github
            </Card.Header>
            <Card.Body>
                <p>
                    I finished my website and converted my website into a qr code first.
                </p>
                <p>
                    Then I worked with the code provided on git hub from:
                    https://github.com/luxonis/depthai-experiments/tree/master/gen2-qr-code-scanner
                </p>
                <p>
                    Unfortunately I can't use this code effectively as it only detects a qr code,
                    and doesn't actually scan it so instead I will be finding a way to deploy it
                    from any device since currently it is stored on my local machine.
                </p>
            </Card.Body>
        </Card>
    )
}
export default CameraCard