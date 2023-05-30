import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/OverallCSS.css';

import defaultTheme from '../graphics/default-theme-resize.png';
import sunshineTheme from '../graphics/morning-sunshine-resize.png';
/**
 * Settings Container gives a user a choice to change themes.
 * 
 * @returns Contianer showing the the two themes and a toggle button.
 */
const SettingsContainer = () => {
    const [currentTheme, setTheme] = useState(
        localStorage.getItem('currentTheme') || 'midnight-theme'
    );

    useEffect(() => {
        localStorage.setItem('currentTheme', currentTheme); 
        /* localStorage requires the page to store the currentTheme as a variable that 
        will help other pages in the website to follow the correct css style.*/
        setTheme(currentTheme);
        document.body.className = currentTheme;
    }, [currentTheme]);

    function toggleThemes() {
        if (currentTheme === "midnight-theme") { /* midnight being the default theme */
            setTheme("sunshine-theme");
        } else {
            setTheme("midnight-theme");
        }
    }

    return (
        <>
            <br />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2>Themes</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <img
                            src={defaultTheme}
                            alt="Default"
                        />
                    </div>
                    <div class="col">
                        <img
                            src={sunshineTheme}
                            alt="morning-sunshine"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h1>Midnight</h1>
                    </div>
                    <div class="col">
                        <h1>Morning Sunshine</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button class="btn-toggle" onClick={toggleThemes}>Toggle Themes</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SettingsContainer