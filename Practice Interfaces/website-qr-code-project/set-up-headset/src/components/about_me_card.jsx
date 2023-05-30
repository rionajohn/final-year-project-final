import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';

const AboutMeCard = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center" }}>About Me</Card.Header>
            <Card.Body>
                <p>
                    My name is Riona John. I am a technology intern at Avanade.
                    I am part of of the Emerging Tech team.
                </p>

                <p>
                    For my project I am using the Luxonis camera
                    and React/React-Boostrap technologies.
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/rionaj/">
                        <Linkedin style={{ fontSize: "20", fontWeight: "bold", color: "white" }} />
                    </a>
                    &nbsp; {/* space in line */}
                    <a href="https://github.com/rionajohn">
                        <Github style={{ fontSize: "20", fontWeight: "bold", color: "white" }} />
                    </a>
                </p>
            </Card.Body>
        </Card>
    )
}
export default AboutMeCard