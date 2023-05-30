import React, { useState, useEffect } from 'react';

import '../css/infoContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * InfoContainer is where user cna turn ona grayscale mde for colour-blind children.
 * 
 * @returns Some extra information and a button that toggles images to be grayscale. 
 */
const InfoContainer = () => {
    const [filter, setFilter] = useState(
        localStorage.getItem('filter') || "grayscale(0%)"
    );

    useEffect(() => {
        localStorage.setItem('filter', filter);

        var images = document.images;
        for (var i = 0; i < images.length; i++) {
            images[i].style.filter = filter;
        }
            
        }, [filter]);

    function toggleFilter() {
        if (filter === "grayscale(0%)") { 
            setFilter("grayscale(100%)");
        } else {
            setFilter("grayscale(0%)");
        }
    }

    return (
        <>
            <div className='InfoPadding'>
                <div className='InfoContainerBox'>
                    <h1><b>Infomational Guide</b></h1>
                    <p>If your child is colourblind
                        please use this toggle/button below
                        to make images easier to see:</p>
                    <button type='button' className='btn-grayscale' onClick={toggleFilter}><b>Toggle</b></button>

                </div>



            </div>

        </>

    )
}
export default InfoContainer