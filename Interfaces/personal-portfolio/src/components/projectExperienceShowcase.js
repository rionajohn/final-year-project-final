import React from 'react';
import '../css/projectExperienceShowcase.css';
import 'font-awesome/css/font-awesome.min.css';

import projectImageRight from "../graphics/avanade.png";
import projectImageLeft from "../graphics/cognext_ai.jpg";

import ReactChip from '../chips/react';
import PythonChip from '../chips/python';
/**
 * Two Projects that I showcase.
 * 
 * @returns projects with description
 */
const ProjectExperienceShowcase = () => {
    return (
        <div className="projectExperienceShowcaseContainer">
            <h1 className="showcaseTitle">Impactful Digital Experience</h1>
            <div className="ProjectCardShowcaseContainer">
                <div className="firstProjectCardContainer">
                    <div className="firstProjectCard">
                        <h2 className="projectTitleRight">React Bootstrap HoloLens Website</h2>
                        <ReactChip/>
                        <p className="projectDescription">I executed a front-end project that
                            was a virtual reality headset guide website through my knowledge of
                            React and node.js. I also had the opportunity to work on my GitHub
                            skills and introduce to myself to more open source projects such as Luxonis camera.</p>
                    </div>
                </div>


                <br />
                <hr class="decorativeBorder" />
                <a className="seeMore" href="/all-projects">See more projects like this <i className="playIcon" class="fa fa-play fa-xs" ></i></a>
                <br />

                <div className="secondProjectCardContainer">
                    <div className="secondProjectCard">
                        <h2 className="projectTitleLeft">Cognext_ai Tesseract Model</h2>
                        <PythonChip />
                        <p className="projectDescription">I built a Tesseract model to
                            improve the accuracy of parsing financial statements with Python.
                            The program would take relevant pages of interest such as Balance
                            Sheets and Profit and Loss Statements and capture singular words
                            and values that will be fed into a model that can provide high-level
                            analytics to users.</p>
                    </div>
                </div>
            </div>

            <img
                src={projectImageRight}
                alt="projectImageRight"
                class="projectImageRight"
            />

            <img
                src={projectImageLeft}
                alt="projectImageLeft"
                class="projectImageLeft"
            />

            
        </div >
    )
}
export default ProjectExperienceShowcase