//Reference: https://www.youtube.com/watch?v=NueuZjC9_Og 
//Creator: The Amazing Codeverse

import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, journalEntryDatabase } from "../firebaseConfig/firebase";

import { Table } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * JournalHistoryTable is referencing the firebase real-time database to get a user's individual journal entries.
 * 
 * @returns a table of previous journal entries 
 */
export function JournalHistoryTable() {
  const [tableData, setTableData] = useState([]);

  const [user] = useAuthState(auth); //current user logged in
  const [currentTheme, setTheme] = useState(
    localStorage.getItem('currentTheme') || ''
  );

  useEffect(() => {
    localStorage.setItem('currentTheme', currentTheme);
    /*localStorage requires the page to store the currentTheme as a variable
     that will help other pages in the website to follow the correct css style.*/
    setTheme(currentTheme);
    document.body.className = currentTheme;
  }, [currentTheme]);

  useEffect(() => {
    try {
      const journalRef = ref(journalEntryDatabase, "/journalEntries/" + user?.uid);
      /*this is referencing the firebase real-time database where it stores user’ journal entries */

      onValue(journalRef, (snapshot) => {
        let entryRecords = [];
        snapshot.forEach(childSnapshot => {
          /**the reason it is checking for a childSnapshot is because the reference 
           * only isolates the current user’s journal but not the individual entries**/
          let keyRecord = childSnapshot.key;
          let data = childSnapshot.val();
          entryRecords.push({ "key": keyRecord, "data": data });
          /**individual entries being added to an array so that 
           * can be set to the table’s contents**/
        });
        setTableData(entryRecords);
      });

    } catch (error) {
      alert("No entries saved!");
    }
  }, [user]);
  /**dependent on the current user 
  (refreshes the results if a different user is logged in)**/

  return (
    <>
      <Table bordered className='historyTable'>
        {/* displaying the results of my query */}
        <thead>
          <tr>
            <th>#</th>
            <th>Date Added</th>
            <th>Title</th>
            <th>Entry</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((row, index) => {
            /**it goes through the values of the entries, 
             * and takes specific parameters and return it to the user**/
            return (
              <tr>
                <td>{index}</td>
                <td>{row.data.currentDate}</td>
                <td>{row.data.title}</td>
                <td>{row.data.entry}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}