import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const SignInSchoolOrWork = () => {
    return (
        <Card className="signInSchWork">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                School or Work Acocunts
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>
                        Enter your organizational account information.
                    </p>
                    <p>
                        Accept the privacy statement and the end user license agreement.
                    </p>
                    <p>
                        Sign in by using your Azure AD credentials.
                        This may redirect to your organization's sign-in page.
                    </p>
                    <p>
                        Continue setting up the device.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default SignInSchoolOrWork