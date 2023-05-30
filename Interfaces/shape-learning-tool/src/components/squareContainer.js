import React, { useState, useEffect } from 'react';

import '../css/squareContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EveryDayObjSquare from '../graphics/everyday-obj/everyDayObjSquare.jpg';
import SquareOnObject from '../graphics/everday-animate/square-on-object.png';

/**
 * ShowSquareImage allows the original image to be changed to an image that has the shape overlayed an object.
 */
const ShowSquareImage = () => {
    try {

        try {
            document.getElementById("windowSquareImg").src = SquareOnObject;
        } catch (err) {
            alert("Image is unavailable!");
        }

    } catch (err) {
        alert("Image is unavailable!");
    }
}

/**
 * SquareContainer shows a user a container that has a square-shaped object and 
 * have a question asking the user to click on the button to show the square on image.
 * 
 * @returns Container
 */
const SquareContainer = () => {

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
            <div className='SquarePadding'>
                <div className='SquareContainerBox'>
                    <img
                        src={EveryDayObjSquare}
                        alt="everyDayObject"
                        className="windowSquareImg"
                        id="windowSquareImg"
                    />
                </div>

                <div className='VerticalBreak'></div>

                <div className='SquareDescription'>
                    <h1><b>Square</b></h1>
                    <p> Look there's a window over there, can you see the square?</p>
                    <button type="button" className='showSquareShapeBtn' onClick={()=>{ShowSquareImage()}}>Show Square</button>
                </div>


            </div>
        </>

    )
}
export default SquareContainer