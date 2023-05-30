import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

import { Magic } from 'react-bootstrap-icons';

const StepCard2 = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>Step 2: Set Up Windows</Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>
                        Below is the following animations you will start
                        to see when you turn the Holo Lens on for the first time.
                    </p>
                    <p>
                        A windows square button will appear click on it, to start.
                    </p>
                    <p>
                        <a href="http://localhost:3000/tips-and-tricks">
                            <Magic style={{ fontSize: "20", fontWeight: "bold", color: "white" }} /> 
                        </a>
                        Slow wtih purpose.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default StepCard2