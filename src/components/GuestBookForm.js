// GuestBookForm.js
import React, { useState } from 'react';

const GuestBookForm = ({ onAddEntry }) => {
    // State variables to store name and message
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the function passed from parent to add entry
        onAddEntry({ name, message });
        // Clear input fields
        setName('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Message:
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Sign Guest Book</button>
        </form>
    );
};

export default GuestBookForm;
