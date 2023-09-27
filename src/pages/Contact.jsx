import { useState } from 'react';
import { validateEmail } from '../utils/helper';
import '../styles/Contact.css';

function Contact() {
    // Create state variables for the fields set their initial values to an empty string
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, name, and message
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        } else {
            setErrorMessage(`UNKNOWN INPUT! ${inputValue}`)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if (!name || !email || !message) {
            setErrorMessage("Field is required");
            return;
        }

        setName('');
        setMessage('')
        setEmail('');
    };

    return (
        <div>
        <h1 className='contactHeader'>Contact</h1>
        <div className='contactForm'>
            <div className='contactFormHeader'></div>
            <form onSubmit={handleFormSubmit}>
            <div class="form-group mb-2">
                <label for="email">Email:</label>
                <input
                    className='form-control'
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                    required
                />
            </div>
            <div class="form-group mb-2">
                <label for="name">Name:</label>
                <input
                    className='form-control'
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                    required
                />
            </div>
            <div class="form-group mb-4">
                <label for="message">Message:</label>
                <textarea
                    className='form-control'
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="message"
                    required
                    rows={4}
                />
            </div>
            <button type="submit" class="btn">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
        </div>
    );
}
export default Contact;