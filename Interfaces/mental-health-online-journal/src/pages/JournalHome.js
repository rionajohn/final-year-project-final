import React from "react";

import currentTheme from "../components/settingsContainer";

import JournalNavBar from "../components/navbarLogin";
import WelcomeContainer from "../components/welcomeContainer";
import CreateJournalPage from "../components/createJournalButton";

/**
 * Home returns the relevant components
 * 
 * @returns NavBar when a user is logged in and Welocme Container, and the button to create new journal entries.
 */
function Home() {
  return (
    <div className={`Home ${currentTheme}`}>
      <JournalNavBar />
      <br />
      <WelcomeContainer />
      <br />
      <CreateJournalPage />
    </div>
  );
}

export default Home;