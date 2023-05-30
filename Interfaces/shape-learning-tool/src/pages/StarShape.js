import React from "react";

import HeaderImg from "../components/header";
import NavigationBar from "../components/navigationBar";
import StarContainer from "../components/starContainer";

/**
 * StarShape returns the relevant components.
 * 
 * @returns the header, navbar, star container. 
 */
function StarShape() {
    return (
        <div className="learn-star-shape">
            <HeaderImg />
            <NavigationBar />
            <br />
            <StarContainer />
        </div>
    );
}

export default StarShape;