import React from "react";

import HeaderImg from "../components/header";
import NavigationBar from "../components/navigationBar";
import InfoContainer from "../components/infoContainer";
/**
 * InfoPage returns the relevant components.
 * 
 * @returns the header, navbar, infomation container.
 */
function InfoPage() {
  return (
    <div className="parent-info">
      <HeaderImg />
      <NavigationBar />
      <br />
      <InfoContainer />
    </div>
  );
}

export default InfoPage;