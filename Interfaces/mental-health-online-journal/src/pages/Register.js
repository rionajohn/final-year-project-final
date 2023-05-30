import React from "react";

import RegisterForm from "../components/registerForm";
/**
 * Register returns the form the user needs to fill in to log in and sign up as  a user.
 * 
 * @returns Register Form
 */
function Register() {
    return (
        <div class="registerPage" >
            <RegisterForm />
        </div>
    );
}

export default Register;
