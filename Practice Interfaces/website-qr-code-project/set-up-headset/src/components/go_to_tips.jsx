import React from 'react';

import '../css_componets/card_css.css';

import { Button } from 'react-bootstrap';
import { Magic } from 'react-bootstrap-icons';


const DirectToTips = () => {
    return (
        <Button variant='secondary' size='lg'>
            <a href="http://localhost:3000/tips-and-tricks" style={{ color: "white", textDecoration: 'none' }}>
                <Magic style={{ fontSize: "20", fontWeight: "bold", color: "white" }} />
                Head To Tips 
            </a>
        </Button>

    )
}
export default DirectToTips