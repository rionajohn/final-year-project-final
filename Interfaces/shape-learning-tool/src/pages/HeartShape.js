import React from "react";

import HeaderImg from "../components/header";
import HeartContainer from "../components/heartContainer";
import NavigationBar from "../components/navigationBar";
/**
 * HeartShape returns the relevant components.
 * 
 * @returns the header, navbar, heart container. 
 */
function HeartShape() {
    return (
        <div className="learn-heart-shape">
            <HeaderImg />
            <NavigationBar />
            <br />
            <HeartContainer />
        </div>
    );
}

export default HeartShape;