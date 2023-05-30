import React from 'react';

import { Link } from "react-router-dom";

import '../css/homeInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * HomeInfo provides information to the user (parents/guardians) on what the website is supposed to do and help.
 * 
 * @returns Information Container
 */
const HomeInfo = () => {
    return (
        <>
            <div className="page">
                <div className="informParentImgContainer">
                    <div className='informParent'>
                        <h2><b>Note to Parents/Guardians:</b></h2>
                        <p>This is an interactive shape learning tool that is parent guided.</p>
                        <p>Hopefully your children will be able to gain some shape knowledge.</p>
                        <p className='bold'>There is a setting that might be helpful for colour-blind children:</p>
                        <p>Please head over to the <Link to="/info" className="infoPageLink">Info Page</Link> for more information.</p>
                    </div>
                </div>
            </div>
        </>

    )
}
export default HomeInfo