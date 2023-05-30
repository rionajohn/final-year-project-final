import React from 'react';

import '../css/navBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pdf from '../current-cv/Riona John CV.pdf';

/**
 * Navbar contains home, about me, projects, contact and a download cv links.
 * 
 * @returns navigation bar.
 */
const NavBar = () => {

    return (
        <>
            <nav class="navbar navbar fixed-top navbar-expand">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about-me" >About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact-me">Contact Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={pdf} target="_blank" rel="noreferrer">
                                Download CV
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    )
}
export default NavBar