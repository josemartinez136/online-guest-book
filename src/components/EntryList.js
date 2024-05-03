// EntryList.js
import React from 'react';

const EntryList = ({ entries }) => {
    return (
        <div className="entries">
            <h2>All Messages:</h2>
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>
                        <strong>{entry.name}:</strong> {entry.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EntryList;
