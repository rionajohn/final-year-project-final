import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';
import { Magic } from 'react-bootstrap-icons';

const TipCard2 = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                <Magic style={{ fontSize: "20", fontWeight: "bold" }} /> Vision Related
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>
                        Wearing glasses might affect performance of the holo lens.
                    </p>
                    <p>
                        In terms of seeing clearer images and able to interact with them too.
                    </p>
                    <p>
                        Make sure you have pushed down the visor completely.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default TipCard2