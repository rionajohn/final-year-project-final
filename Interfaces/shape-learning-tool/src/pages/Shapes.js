import React, { useState, useEffect } from 'react';

import HeaderImg from "../components/header";
import NavigationBar from "../components/navigationBar";
import ShapesListContainer from "../components/shapesList";

/**
 * LearnShapePage returns the relevant components.
 * 
 * @returns the header, nav bar and all the shapes.
 */
function LearnShapePage() {

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
        <div className="learn-shapes-page">
            <HeaderImg />
            <NavigationBar />
            <br />
            <ShapesListContainer />
        </div>
    );
}

export default LearnShapePage;