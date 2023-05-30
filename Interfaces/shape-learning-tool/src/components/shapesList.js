import React from 'react';
import { Link } from "react-router-dom";

import '../css/shapeList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import square from '../graphics/shapes/square-resize.png';
import triangle from '../graphics/shapes/triangle-resize.png';
import circle from '../graphics/shapes/circle-resize.png';
import heart from '../graphics/shapes/heart-resize.png';
import rectangle from '../graphics/shapes/rectangle-resize.png';
import star from '../graphics/shapes/star-resize.png';
/**
 * ShapesListContainer shows all the shapes that are there to learn on this tool.
 * A user can click on the names to find further information on the shape.
 * 
 * @returns all the shapes and their names
 */
const ShapesListContainer = () => {
    return (
        <>
            <div class="ShapesContainer">
                <div class="row">
                    <div class="col">
                        <div class="SquareContainer">
                            <img
                                src={square}
                                alt='square'
                                className='square'
                            />
                            <br />
                            <Link to="/learn-shapes-square" className="ShapeLinkToPage">Square</Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="TriangleContainer">
                            <img
                                src={triangle}
                                alt='triangle'
                                className='triangle'
                            />
                            <br />
                            <Link to="/learn-shapes-triangle" className="ShapeLinkToPage">Triangle</Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="CircleContainer">
                            <img
                                src={circle}
                                alt='circle'
                                className='circle'
                            />
                            <br />
                            <Link to="/learn-shapes-circle" className="ShapeLinkToPage">Circle</Link>
                        </div>
                    </div>
                </div>

                <br />

                <div class="row">
                    <div class="col">
                        <div class="HeartContainer">
                            <img
                                src={heart}
                                alt='heart'
                                className='heart'
                            />
                            <br />
                            <Link to="/learn-shapes-heart" className="ShapeLinkToPage">Heart</Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="RectangleContainer">
                            <img
                                src={rectangle}
                                alt='rectangle'
                                className='rectangle'
                            />
                            <br />
                            <Link to="/learn-shapes-rectangle" className="ShapeLinkToPage">Rectangle</Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="StarContainer">
                            <img
                                src={star}
                                alt='star'
                                className='star'
                            />
                            <br />
                            <Link to="/learn-shapes-star" className="ShapeLinkToPage">Star</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default ShapesListContainer