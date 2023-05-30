import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderAndNavBar from '../components/header';
import { LoginWebForm } from '../components/LoginForm/loginTestForm';


function LoginForm() {
  return (
    <div className="AboutMe">
      <HeaderAndNavBar />
      <br />
      <LoginWebForm />
    </div>
  );
}

export default LoginForm;