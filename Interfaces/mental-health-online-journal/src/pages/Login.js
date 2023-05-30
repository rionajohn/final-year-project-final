import React from "react";

import LoginForm from "../components/loginForm";
/**
 * Login returns the form the user needs to submit to log in.
 * 
 * @returns Login Form
 */
function Login() {
  return (
    <div class="loginPage">
      <LoginForm />
    </div>
  );
}

export default Login;
