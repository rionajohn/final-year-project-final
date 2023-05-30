import React from 'react';

import { Button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * WelcomeToJournalContainer is a container telling the user to start and create a journal entry. 
 * 
 * @returns container
 */
const WelcomeToJournalContainer = () => {

    return (
        <div class="welcomeContainer">
            <h1>Welcome</h1>
            <p> If you are struggling, and want to write about it, there's no time time like the present.</p>
            <p> Click below to start writing: </p>
            <Button className="startJournal" href="/login">Create a New Journal Entry</Button>
        </div>
    )
}
export default WelcomeToJournalContainer