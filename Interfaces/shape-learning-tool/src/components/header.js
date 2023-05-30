import React from 'react';
import '../css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import imgHeader from '../graphics/shapes-header-resize.png';

/**
 * HeaderImg shows the logo of the shape-learning tool
 * 
 * @returns an image
 */
const HeaderImg = () => {
    return (
        <>
            <img
                src={imgHeader}
                alt="Mental Health Online Journal"
                class="center"
            />
        </>

    )
}
export default HeaderImg