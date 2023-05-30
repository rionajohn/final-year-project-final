import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import header from '../graphics/mental-health-header-resize.png';

/**
 * HeaderAndNavBar is a navigation bar component for the page before logining in.
 * 
 * @returns navbar component that has a home link and login button.
 */
const HeaderAndNavBar = () => {
    return (
        <div style={{ display: 'block' }}>
            <img
                src={header}
                alt="Mental Health Online Journal"
                class="center"
            />

            <nav class="navbar navbar-expand navbar-dark">
                <a class="navbar-brand" href="/home">Home</a>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li className='helpLink' class="nav-item">
                            <a class="nav-link" role="button" href="/help-support">Help </a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                        <li class="nav-item">
                            <a class="btn" role="button" href="/login">Login </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}
export default HeaderAndNavBar