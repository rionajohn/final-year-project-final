import React from "react";

import currentTheme from "../components/settingsContainer";

import JournalNavBar from "../components/navbarLogin";
import SettingsContainer from "../components/settingsContainer";

/**
 * SettingsPage returns the relevant components.
 *  
 * @returns NavBar when a user is logged in, the settings container so that user's can chnage themes. 
 */
function SettingsPage() {
  return (
    <div className={`Home ${currentTheme}`}>
      <JournalNavBar />
      <SettingsContainer />

    </div>
  );
}

export default SettingsPage;