import React, { useState, useEffect } from 'react';

import '../css/starContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EveryDayObjStar from '../graphics/everyday-obj/everyDayObjStar.jpg';
import StarOnObject from '../graphics/everday-animate/star-on-object.png';

/**
 * ShowStarImage allows the original image to be changed to an image that has the shape overlayed an object.
 */
const ShowStarImage = () => {
    try {
        document.getElementById("ChristmasStarImg").src = StarOnObject;
    } catch (err) {
        alert("Image is unavailable!");
    }
}

/**
 * StarContainer shows a user a container that has a star-shaped object and 
 * have a question asking the user to click on the button to show the star on image.
 * 
 * @returns Container
 */
const StarContainer = () => {

    const [filter, setFilter] = useState(
        localStorage.getItem('filter') || "grayscale(0%)"
    );

    useEffect(() => {
        localStorage.setItem('filter', filter);
        
        var images = document.images;
        for (var i = 0; i < images.length; i++) {
            images[i].style.filter = filter;
        }

        setFilter(filter);

    }, [filter]);

    return (
        <>
            <div className='StarPadding'>
                <div className='StarContainerBox'>
                    <img
                        src={EveryDayObjStar}
                        alt="everyDayObject"
                        className="ChristmasStarImg"
                        id="ChristmasStarImg"
                    />
                </div>

                <div className='VerticalBreak'></div>

                <div className='StarDescription'>
                    <h1><b>Star</b></h1>
                    <p> Look it's a christmas tree over there, can you see the star on the top?</p>
                    <button type="button" className='showStarShapeBtn' onClick={() => { ShowStarImage() }}>Show Star</button>
                </div>


            </div>
        </>

    )
}
export default StarContainer