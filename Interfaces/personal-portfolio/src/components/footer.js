import React from 'react';

import '../css/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

/**
 * Footer seen at the bottom of the screen with social media links.
 * 
 * @returns footer.
 */
const Footer = () => {

    return (
        <>
            <footer className="footer-container">
                <div className="grid-container">
                    <div class="contact-info">
                        <a
                            class="linkedInBtn"
                            href="https://www.linkedin.com/in/rionaj/"
                            role="button"
                            target="_blank"
                            rel="noreferrer"
                        ><i class="fa fa-linkedin-square"></i>
                        </a>

                        <a
                            class="gitHubBtn"
                            href="https://github.com/rionajohn"
                            role="button"
                            target="_blank"
                            rel="noreferrer"
                        ><i class="fa fa-github"></i>
                        </a>
                    </div>
                </div>

                <div className="copyRightStatement">
                    © 2023 Copyright: Riona John 
                </div>
            </footer>
        </>
    )
}
export default Footer