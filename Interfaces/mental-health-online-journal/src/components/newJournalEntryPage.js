import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, journalEntryDatabase } from "../firebaseConfig/firebase";
import { ref, push } from "firebase/database";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
/**
 * This component allows a user to add a new journal entry and save it to the real-time database
 * Each journal entry has a date, title, entry.
 * 
 * @returns the container where a user can type in a title and entry.
 */
const NewJournalEntrySaved = () => {
    const [user] = useAuthState(auth);

    const [title, setTitle] = useState("");
    const [entry, setEntry] = useState("");
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

    const navigate = useNavigate();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    const SaveEntry = () => {
        try {
            if (title === "") {
                alert("You haven't written anything to save!");
            } else {

                const DatabaseRef = ref(journalEntryDatabase, "journalEntries/" + user?.uid);

                push(DatabaseRef, { //Creates a new unique identifier for a journal uid
                    title: title,
                    entry: entry,
                    currentDate: today
                });;

                alert("Data has been successfully saved!");
                navigate("/history"); //redirect to history page
            }

        } catch (err) {
            alert("Data has not been saved!");
        }
    }

    return (
        <>
            <div class="container text-white">
                <label for="inputTitle" className="label">Title:</label>

                <input
                    id="inputTitle"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What's on your mind today?"
                    class="form-control"
                />
                <br />
                <label for="inputTextArea" className="label">Journal Entry:</label>

                <textarea
                    id="inputTextArea"
                    className="entry_txtBox"
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                    rows="12"
                    placeholder="Start writing any of your worries..."
                    class="form-control"
                />
                <br />
                <div class="text-center">
                    <Button className="saveNewEntryBtn" onClick={SaveEntry}>Save Journal Entry</Button>
                </div>
            </div>
        </>
    )
}
export default NewJournalEntrySaved