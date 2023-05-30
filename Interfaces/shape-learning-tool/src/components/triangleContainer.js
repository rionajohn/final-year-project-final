import React, { useState, useEffect } from 'react';

import '../css/triangleContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EveryDayObjTriangle from '../graphics/everyday-obj/everyDayObjTriangle.jpg';
import TriangleOnObject from '../graphics/everday-animate/triangle-on-object.png';

/**
 * ShowTriangleImage allows the original image to be changed to an image that has the shape overlayed an object.
 */
const ShowTriangleImage = () => {
    try {
        document.getElementById("playButtonTriangle").src = TriangleOnObject;
    } catch (err) {
        alert("Image is unavailable!");
    }
}

/**
 * TriangleContainer shows a user a container that has a triangular object and 
 * have a question asking the user to click on the button to show the triangle on image.
 * 
 * @returns Container
 */
const TriangleContainer = () => {

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
            <div className='TrianglePadding'>
                <div className='TriangleContainerBox'>
                    <img
                        src={EveryDayObjTriangle}
                        alt="everyDayObject"
                        className="playButtonTriangle"
                        id="playButtonTriangle"
                    />
                </div>

                <div className='VerticalBreak'></div>

                <div className='TriangleDescription'>
                    <h1><b>Triangle</b></h1>
                    <p> Look it's Youtube, can you see the triangle?</p>
                    <button type="button" className='showTriangleShapeBtn' onClick={() => { ShowTriangleImage() }}>Show Triangle</button>
                </div>


            </div>
        </>

    )
}
export default TriangleContainer