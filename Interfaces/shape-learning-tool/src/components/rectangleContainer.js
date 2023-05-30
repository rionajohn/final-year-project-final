import React, { useState, useEffect } from 'react';

import '../css/rectangleContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EveryDayObjRectangle from '../graphics/everyday-obj/everyDayObjRectangle.jpg';
import RectangleOnObject from '../graphics/everday-animate/rectangle-on-object.png';

/**
 * ShowRectangleImage allows the original image to be changed to an image that has the shape overlayed an object.
 */
const ShowRectangleImage = () => {
    try {
        document.getElementById("doorRectangleImg").src = RectangleOnObject;
    } catch (err) {
        alert("Image is unavailable!");
    }
}

/**
 * RectangleContainer shows a user a container that has a rectangular object and 
 * have a question asking the user to click on the button to show the rectangle on image.
 * 
 * @returns Container
 */
const RectangleContainer = () => {

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
            <div className='RectanglePadding'>
                <div className='RectangleContainerBox'>
                    <img
                        src={EveryDayObjRectangle}
                        alt="everyDayObject"
                        className="doorRectangleImg"
                        id="doorRectangleImg"
                    />
                </div>

                <div className='VerticalBreak'></div>

                <div className='RectangleDescription'>
                    <h1><b>Rectangle</b></h1>
                    <p> Look there's a door over there, can you see the rectangle?</p>
                    <button type="button" className='showRectangleShapeBtn' onClick={() => { ShowRectangleImage() }}>Show Rectangle</button>
                </div>


            </div>
        </>

    )
}
export default RectangleContainer