import React from 'react';

import '../css/navBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * NavigationBar is a navigation bar that show different links.
 *  
 * @returns a home link, info link, shapes link, quiz link
 */
const NavigationBar = () => {
    return (
        <>
            <div className='navBarContainer'>
                <nav class="navbar navbar-expand navbar-dark">
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/info">Info</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/learn-shapes">Shapes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/quiz">Quiz</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>

    )
}
export default NavigationBar