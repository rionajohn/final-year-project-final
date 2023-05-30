import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

/**
 * CreateJournalPage is a function that displays a button that says "create a new journal entry"
 * 
 * @returns button 
 */
const CreateJournalPage = () => {
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

    return (
        <>
            <div class="text-center">
                <Button className="newEntryBtn" href="/journal-new-entry">Create a New Journal Entry</Button>
            </div>
        </>

    )
}
export default CreateJournalPage