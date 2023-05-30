//Reference: https://github.com/atharvadeosthale/firebase-auth-article/tree/master/src 
//Author: Atharva Deosthale

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../firebaseConfig/firebase";
/**
 * Register Form collects the user's inputs and stores it in the firebase cloudstore database.
 * 
 * @returns Register Form
 */
const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const registerWithValidation = () => { //Validation if any of the textboxes are empty
        if (!firstName || !lastName || !email || !password) alert("Please enter your details");
        registerWithEmailAndPassword(firstName, lastName, email, password);
    };

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/journal-home");
    }, [user, loading, navigate]);

    return (
        <>
            <div className="register">
                <div className="register__container">
                    <input
                        type="text"
                        className="register__textBox"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        className="register__textBox"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                    />
                    <input
                        type="text"
                        className="register__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    <input
                        type="password"
                        className="register__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button className="register__btn" onClick={registerWithValidation}>
                        Register
                    </button>
                    <div className="login-text">
                        Already have an account? <Link to="/login" className="login-link">Login</Link> now.
                    </div>
                </div>
            </div>
        </>

    )
}
export default RegisterForm