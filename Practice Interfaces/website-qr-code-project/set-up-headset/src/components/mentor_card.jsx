import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const MentorCard = () => {
    return (
        <Card className="findOutMore">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Mentors at Avanade
            </Card.Header>
            <Card.Body>
                <p>
                    I have two mentors at Avanade: Emma Holiday and Sarah Heubener.
                    Emma is a front-end developer and Sarah is a service design researcher.
                </p>
                <p>
                    Emma has been extremely helpful by helping me understand react and how certain things
                    link like the the pages. She has given me the confidence to feel prepared for my final year 
                    project as I using similar technologies.   
                </p>
                <p>
                    Sarah is someone I met only recently but she has given me some insight on her job 
                    and more about the process of design in general that happens from a researcher's 
                    point of view.  
                </p>
                <p>
                    They both have taught me about the design studio within Avanade has expanded 
                    my intrests witin the studio especially. I will be most likely moving forward 
                    in this direction in the future.
                </p>
            </Card.Body>
        </Card>
    )
}
export default MentorCard