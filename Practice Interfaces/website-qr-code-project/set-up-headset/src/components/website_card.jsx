import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const WebsiteCard = () => {
    return (
        <Card className="findOutMore">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                React/React-Bootstrap Website
            </Card.Header>
            <Card.Body>
                <p>
                    This is the website I created for my project.
                </p>
                <p>I created a guide on how to use a HoloLens Gen2
                    since I felt like as someone who didn't know how to use it either.
                    I wanted to make sure new users have a less confusing experience.
                </p>
                <p>
                    Also since more clients are being introduced into virtual reality headsets 
                    this will be helpful to reassure them that isn't a hard thing to set up or use.
                </p>
                <p>
                    Make sure to check my tips and tricks webpage.
                </p>
            </Card.Body>
        </Card>
    )
}
export default WebsiteCard