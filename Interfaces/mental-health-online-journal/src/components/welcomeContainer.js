/* Reference: https://github.com/atharvadeosthale/firebase-auth-article/tree/master/src 
Author: Atharva Deosthale */

import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * WelcomeCOntainer allows a user to be greeted by their own first name as a 
 * sort of familiar greeting.
 * 
 * @returns the user's first name within the container.
 */
const WelcomeContainer = () => {
    const [user, loading] = useAuthState(auth);
    const [firstName, setFirstName] = useState("");
    const navigate = useNavigate();

    const [currentTheme, setTheme] = useState(
        localStorage.getItem('currentTheme') || ''
    );

    useEffect(() => {
        localStorage.setItem('currentTheme', currentTheme);
        /*localStorage requires the page to store the currentTheme as a variable
         that will help other pages in the website to follow the correct css style.*/
        setTheme(currentTheme);
        document.body.className = currentTheme;
    }, [currentTheme]);

    useEffect(() => {
        /**Depending if the user has changed then, the user's first name's value will have changed as well**/
        const fetchFirstName = async () => {
            try {
                const q = query(collection(db, "users"), where("uid", "==", user?.uid));
                const doc = await getDocs(q);
                const data = doc.docs[0].data();

                setFirstName(data.firstName);
            } catch (err) {
                console.error(err);
                alert("An error occured while fetching user data");
            }
        };

        if (loading) return;
        if (!user) return;

        fetchFirstName();
    }, [user, loading, navigate]);

    return (
        <>
            <div class="container">
                <h1 class="text-center">Welcome {firstName}</h1>
            </div>
        </>

    )
}
export default WelcomeContainer