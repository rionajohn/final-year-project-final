//Reference: https://github.com/atharvadeosthale/firebase-auth-article/tree/master/src 
//Author: Atharva Deosthale

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebaseConfig/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

/**
 * LoginForm collects the user's input and compare's it to the firebase
 * cloudstore database storing email and password to check if the user exists.
 * 
 * @returns the login form
 */

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate("/journal-home");
    }, [user, navigate]);

    return (
        <div className="login">
            <div className="login__container"> 
                <input
                    type="text"
                    className="login__email__txtBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="login__password__txtBox"
                    value={password}
                    // disabled = 'false'
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="login__btn"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                <div className="register-text">
                    Don't have an account? <Link to="/register" className="register-link">Register</Link> now.
                </div>
            </div>
        </div>
    );
}
export default LoginForm