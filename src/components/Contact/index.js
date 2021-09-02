import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        };
        // console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        };
    };
    console.log(formState);


    // JSX
    return (
        <section className="my-5">
            <h2 className="contact-title">contact me</h2>
            <div className="content">
                <div className="my-2 contact-txt">
                    <p className="contact-message">If you would like to get in contact with me, feel free to fill out the form below! If you would rather, feel free to send me an 
                        <a href="mailto:shannon.nell92@gmail.com"> email </a> 
                        or message me on 
                        <a href="https://github.com/shannonNell" target="_blank"> GitHub </a> 
                        or 
                        <a href="https://www.linkedin.com/in/shannonnell/" target="_blank"> LinkedIn</a>.</p>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-info">
                            <label htmlFor="name">Name: </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                onBlur={handleChange} />
                        </div>
                        <div className="contact-info">
                            <label htmlFor="email">Email address: </label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={email}
                                onBlur={handleChange} />
                        </div>
                        <div className="contact-info">
                            <label htmlFor="message">Message: </label>
                            <textarea
                                name="message"
                                rows="5"
                                defaultValue={message}
                                onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div className="contact-info">
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button data-testid="button" type="submit">Submit</button>
                    </form>
                    
                </div>
            </div>
        </section>
    );
}

export default ContactForm;