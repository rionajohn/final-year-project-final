import React, { useState, useEffect } from 'react';

import '../css/heartContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EveryDayObjHeart from '../graphics/everyday-obj/everyDayObjHeart.jpg';
import HeartOnObject from '../graphics/everday-animate/heart-on-object.png';

/**
 * ShowHeartImage allows the original image to be changed to an image that has the shape overlayed an object.
 */
const ShowHeartImage = () => {
    try {
        document.getElementById("strawberryHeart").src = HeartOnObject;
    } catch (err) {
        alert("Image is unavailable!");
    }
}

/**
 * HeartContainer shows a user a container that has a heart-shaped object and 
 * have a question asking the user to click on the button to show the heart on image.
 * 
 * @returns Container
 */
const HeartContainer = () => {

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
            <div className='HeartPadding'>
                <div className='HeartContainerBox'>
                    <img
                        src={EveryDayObjHeart}
                        alt="everyDayObject"
                        className="strawberryHeart"
                        id="strawberryHeart"
                    />
                </div>

                <div className='VerticalBreak'></div>

                <div className='HeartDescription'>
                    <h1><b>Heart</b></h1>
                    <p> Look there's a lot of strawberries over there, can you see the hearts?</p>
                    <button type="button" className='showHeartShapeBtn' onClick={() => { ShowHeartImage() }}>Show Heart</button>
                </div>


            </div>
        </>

    )
}
export default HeartContainer