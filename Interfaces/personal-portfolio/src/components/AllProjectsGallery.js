import React from 'react';
import '../css/allProjectsGallery.css';

import JavaChip from '../chips/java';
import PostgreSQL from '../chips/postgreSQL';
import LeJOSChip from '../chips/leJOS';
import GroupProjectChip from '../chips/groupProject';
/**
 * A gallery that presents my different projects, with tags.
 * 
 * @returns project containers
 */
const AllProjectsGallery = () => {

    return (
        <div className="allProjectsGalleryContainer">
            <h1 className="showcaseTitle">All Projects</h1>
            <div className="ProjectContainer">
                <div className="CardContainer">
                    <div className="ProjectCard">
                        <h2 className="projectTitle">Restaurant Ordering System</h2>
                        <JavaChip />
                        <PostgreSQL />
                        <GroupProjectChip />
                        <p className="projectDescription">I created a fully functional restaurant
                        system for all the user: customers and waiter, kitchen staff. One of the main 
                        user stories we worked on was having a menu that you could filter out 
                        and make the system intuitive for the customer. We used used Agile 
                        Methodologies and completed the project within 5 Sprints. </p>
                    </div>
                </div>
            </div>

            <br />

            <div className="ProjectContainer">
                <div className="CardContainer">
                    <div className="ProjectCard">
                        <h2 className="projectTitle">Colour Finding Object Robot</h2>
                        <LeJOSChip />
                        <GroupProjectChip />
                        <p className="projectDescription">We used a LeJOS Rebot to find a selected 
                        coloured item.. If a user selected red, the robot would search the space 
                        for a red item, if it is found it will play a happy tune, if not a sad tune. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllProjectsGallery