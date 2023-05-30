import React from "react";

import HeaderImg from "../components/header";
import NavigationBar from "../components/navigationBar";
import TriangleContainer from "../components/triangleContainer";

/**
 * TriangleShape returns the relevant components.
 * 
 * @returns the header, navbar, triangle container. 
 */
function TriangleShape() {
    return (
        <div className="learn-triangle-shape">
            <HeaderImg />
            <NavigationBar />
            <br />
            <TriangleContainer />
        </div>
    );
}

export default TriangleShape;