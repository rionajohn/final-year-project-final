import React from "react";

import HeaderAndNavBar from '../components/navbarIntro';
import HomeHelpContainer from "../components/homeHelpContainter";


/**
 * HelpHome returns the relevant components
 * 
 * @returns NavBar when a user is logged out, the contianer that is showned on this page (provides external support).
 */
function HelpHome() {
  return (
    <div className= "HelpHome">
      <HeaderAndNavBar/>
      <br />
      <HomeHelpContainer/>
    </div>
  );
}

export default HelpHome;