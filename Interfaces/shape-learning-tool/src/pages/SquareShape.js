import React from "react";

import HeaderImg from "../components/header";
import NavigationBar from "../components/navigationBar";
import SquareContainer from "../components/squareContainer";

/**
 * SquareShape returns the relevant components.
 * 
 * @returns the header, navbar, square container. 
 */
function SquareShape() {
    return (
        <div className="learn-square-shape">
            <HeaderImg />
            <NavigationBar />
            <br />
            <SquareContainer />
        </div>
    );
}

export default SquareShape;