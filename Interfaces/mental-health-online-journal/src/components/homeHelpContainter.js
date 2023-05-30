import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import MHImage from '../graphics/mental-health-awareness-resize.png';

/**
 * WelcomeToJournalContainer is a container telling the user to start and create a journal entry. 
 * 
 * @returns container
 */
const HomeHelpContainer = () => {

    return (
        <div class="homeHelpContainer">
            <div class="row">
                <img
                    src={MHImage}
                    alt="Mental-Health-Awareness"
                    className='MHImage'
                />
            </div>

            <div class="supportContainer">
                <div class="row">
                    <h2>External Support:</h2>
                    <p>Note the folowing support is specific to
                        people who live in the United Kingdom.</p>
                    <div class="supportSubContainer">
                        <ul>
                            <li>Call&nbsp;
                                <a class="help-links" href="tel:116123">116 123</a>
                                &nbsp;to talk to&nbsp;
                                <a class="help-links" href="https://www.samaritans.org/how-we-can-help/contact-samaritan/">
                                    Samaritans</a>,
                                or email:&nbsp;
                                <a class="help-links" href="mailto:jo@samaritans.org"> jo@samaritans.org</a> for a <b>reply
                                    within 24 hours</b>
                            </li>

                            <li>Text <b>"SHOUT" to 85258</b> to contact the
                                &nbsp;<a class="help-links" href="https://www.giveusashout.org/">Shout Crisis Text Line</a>,
                                or text <b>"YM" if you're under 19</b></li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
        </div>


    )
}
export default HomeHelpContainer