import React from "react";

import currentTheme from "../components/settingsContainer";

import JournalNavBar from "../components/navbarLogin";
import { JournalHistoryTable } from "../components/JournalHistoryTable";
/**
 * Journal History Page returns the relevant components.
 * 
 * @returns NavBar when a user is logged in and the Journal History Table.
 */
function JournalHistory() {
  return (
    <div className={`JournalHistory ${currentTheme}`}>
      <JournalNavBar />
      <br />
      <JournalHistoryTable />
    </div>
  );
}

export default JournalHistory;