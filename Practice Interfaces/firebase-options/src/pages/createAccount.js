import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderAndNavBar from '../components/header';
import { NewAccount } from '../components/newAccountForm/newAccountForm';


function CreateAccount() {
  return (
    <div className="AboutMe">
      <HeaderAndNavBar />
      <br />
      <NewAccount />
    </div>
  );
}

export default CreateAccount;