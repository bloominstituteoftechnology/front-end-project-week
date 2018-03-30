import React from 'react';
import notestyles from './notestyles.css';
import { Link } from 'react-router-dom';

const NoteForm = () => {
  return (
    <div>
      <form>
        <label>Create New Note:</label>
        <input type="text" />
        <textarea />
        <Link to="/">
          <button className="note-button">Save</button>
        </Link>
      </form>
    </div>
  );
};

export default NoteForm;
