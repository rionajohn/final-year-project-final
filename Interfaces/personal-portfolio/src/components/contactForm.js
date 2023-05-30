import React, { useState } from 'react';
import '../css/contactForm.css';
/**
 * Contact Form that currently has no functionality.
 * 
 * @returns a contact form.
 */
const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [checkBox, setCheckBox] = useState("");

    function validationForContactForm() {
        if (!name || !email || !subject || !message) {
            alert("Please fill in some information");
            if (!checkBox) {
                alert("If you would like this message, check the tick box!");
            }
            
        }
    }

    return (
        <>
            <div className="contactFormContainer" id='contact-me'>

                <form className="form">
                    <div className='form-header'>
                        <h2><b>Contact Me</b></h2>
                    </div>

                    <div class="row">
                        <div class="form-group col-md-6">
                            <label class="form-label" for="contactForm">Name:</label>
                            <input
                                type="text"
                                id="contactForm"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                class="form-control"
                                placeholder='Name' />
                        </div>

                        <div class="form-group col-md-6">
                            <label class="form-label" for="contactForm">Email Address:</label>
                            <input
                                type="email"
                                id="contactForm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                class="form-control"
                                placeholder='Email Address' />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="contactForm">Subject:</label>
                        <input
                            type="text"
                            id="contactForm"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            class="form-control"
                            placeholder='Subject' />
                    </div>


                    <div class="form-group">
                        <label class="form-label" for="contactForm">Message:</label>
                        <textarea
                            class="form-control"
                            id="contactForm"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            placeholder='How can I help?'></textarea>
                    </div>

                    <div class="checkBox">
                        <input class="form-check-input me-2" type="checkbox" value={checkBox} onChange={(e) => setCheckBox(e.target.value)} id="contactForm" />
                        <label class="form-check-label" for="contactForm">
                            Send me a copy of this message
                        </label>
                    </div>

                    <div className='sendButton'>
                        <button type="button" className="sendBtn" onClick={validationForContactForm}>Send</button>
                    </div>

                </form>
            </div>
        </>
    )
}
export default ContactForm