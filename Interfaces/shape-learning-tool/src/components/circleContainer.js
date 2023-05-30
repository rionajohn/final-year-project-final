import React, { useState, useEffect } from 'react';

import '../css/circleContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EveryDayObjCircle from '../graphics/everyday-obj/everyDayObjCircle.jpg';
import CircleOnObject from '../graphics/everday-animate/circle-on-object.png';

/**
 * ShowCircleImage allows the original image to be changed to an image that has the shape overlayed an object.
 */
const ShowCircleImage = () => {
    try {
        document.getElementById("clockCircleImg").src = CircleOnObject;
    } catch (err) {
        alert("Image is unavailable!");
    }
}

/**
 * CircleContainer shows a user a container that has a circular object and 
 * have a question asking the user to click on the button to show the circle on image.
 * 
 * @returns Container
 */
const CircleContainer = () => {
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
            <div className='CirclePadding'>
                <div className='CircleContainerBox'>
                    <img
                        src={EveryDayObjCircle}
                        alt="everyDayObject"
                        className="clockCircleImg"
                        id="clockCircleImg"
                    />
                </div>

                <div className='VerticalBreak'></div>

                <div className='CircleDescription'>
                    <h1><b>Circle</b></h1>
                    <p> Look there's a clock over there, can you see the circle?</p>
                    <button type="button" className='showCircleShapeBtn' onClick={() => { ShowCircleImage() }}>Show Circle</button>
                </div>


            </div>
        </>

    )
}
export default CircleContainer