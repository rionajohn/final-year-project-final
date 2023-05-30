import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const SignInPersonal = () => {
    return (
        <Card className="signInPersonal">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Personal Accounts
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>
                        Enter your Microsoft account information.
                    </p>
                    <p>
                        Enter your password.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default SignInPersonal