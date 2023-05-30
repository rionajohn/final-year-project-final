import React from "react";

import HeaderImg from "../components/header";
import NavigationBar from "../components/navigationBar";
import RectangleContainer from "../components/rectangleContainer";
/**
 * RectangleShape returns the relevant components.
 * 
 * @returns the header, navbar, rectangle container. 
 */
function RectangleShape() {
    return (
        <div className="learn-rectangle-shape">
            <HeaderImg />
            <NavigationBar />
            <br />
            <RectangleContainer />
        </div>
    );
}

export default RectangleShape;