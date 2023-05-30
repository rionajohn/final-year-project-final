import React, { useState, useEffect } from 'react';

import HeaderImg from "../components/header";
import NavigationBar from "../components/navigationBar";
import QuizContainer from "../components/quizContainer";
/**
 * QuizPage returns the relevant components.
 * 
 * Note: Has not been fully implemented.
 * 
 * @returns header, navbar
 */
function QuizPage() {

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
        <div className="shapes-quiz">
            <HeaderImg />
            <NavigationBar />
            <br/>
            <QuizContainer/>

        </div>
    );
}

export default QuizPage;