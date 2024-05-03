import React, { useState } from 'react';
import GuestBookForm from './components/GuestBookForm';
import EntryList from './components/EntryList';
import './App.css';

const GuestBook = () => {
  // State variable to store list of entries
  const [entries, setEntries] = useState([]);

  // Function to add entry to the list
  const handleAddEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div className="guestbook">
      <h1>Online Guest Book</h1>
      <GuestBookForm onAddEntry={handleAddEntry} />
      <EntryList entries={entries} />
    </div>
  );
};

export default GuestBook;
