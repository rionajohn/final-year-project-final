import React from 'react';
import { logout } from "../firebaseConfig/firebase";

import 'bootstrap/dist/css/bootstrap.min.css';

import header from '../graphics/mental-health-header-resize.png';
/**
 * JournalNavBar is a navigation bar component for when the user is logged in. 
 * 
 * @returns navbar component that has a journal home link, history link, settings link and logout button.
 */
const JournalNavBar = () => {

    return (
        <>
            <img
                src={header}
                alt="Mental Health Online Journal"
                class="center"
            />

            <nav class="navbar navbar-expand navbar-dark">                
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/journal-home">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/history" >History </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/settings">Settings </a>
                        </li>
                        <li class="nav-item">
                            <a class="btn" role="button" href="/" onClick={logout}>Logout </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    )
}
export default JournalNavBar