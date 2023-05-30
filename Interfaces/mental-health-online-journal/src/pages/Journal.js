import React from "react";

import currentTheme from "../components/settingsContainer";

import JournalNavBar from "../components/navbarLogin";
import NewJournalEntrySaved from "../components/newJournalEntryPage";

/**
 * JournalNewEntryPage returns the relevant components.
 * 
 * @returns NavBar when a user is logged in and the Journal Entry Container.
 */
function JournalNewEntryPage() {
  return (
    <div className={`JournalNewEntryPage ${currentTheme}`}>
      <JournalNavBar />
      <br />
      <NewJournalEntrySaved />
    </div>
  );
}

export default JournalNewEntryPage;