import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function ContactForm() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !userName) {
            setErrorMessage('Please enter a valid email address and username.');
            return;
        }

        if (!setMessage(message)) {
            setErrorMessage(`Message is required.`);
            return;
        }

        setUserName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="reach-out" className="contact">
            <div className="flex-row">
                <h2 className="section-title secondary-border">Reach Out</h2>
            </div>

            <div className="contact-form">
                <h3>Contact Me</h3>
                <form className="form">
                    <label htmlFor="contact-name">Name:</label>
                    <input
                        value={userName}
                        name="userName"
                        onChange={handleChange}
                        type="text"
                        id="contact-name"
                        placeholder="Your Name"
                    />

                    <label htmlFor="contact-email">Email:</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleChange}
                        type="email"
                        id="contact-email"
                        placeholder="Your Email"
                    />

                    <label htmlFor="contact-message">Message:</label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleChange}
                        type="message"
                        id="contact-message"
                        placeholder="Your Message">
                    </textarea>

                    <button type="button" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </section>
    )

}

export default ContactForm;