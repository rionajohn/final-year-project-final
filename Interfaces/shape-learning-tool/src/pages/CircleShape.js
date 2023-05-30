import React from "react";

import HeaderImg from "../components/header";
import NavigationBar from "../components/navigationBar";
import CircleContainer from "../components/circleContainer";
/**
 * CircleShape returns the relevant components.
 * 
 * @returns the header, navbar, circle container. 
 */
function CircleShape() {
    return (
        <div className="learn-circle-shape">
            <HeaderImg />
            <NavigationBar />
            <br />
            <CircleContainer />
        </div>
    );
}

export default CircleShape;