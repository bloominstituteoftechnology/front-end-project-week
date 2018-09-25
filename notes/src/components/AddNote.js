import React from 'react';
import { Link } from 'react-router-dom';

const AddNote = props => {
  return (
    <div className = 'new-container'>
      <h1>Create a new note:</h1>
      <div className = 'note-input'>
        <input onChange = {props.inputHandler}
          name = 'newtitle'
          className = 'new-title'
          placeholder = 'Title'
        />

        <textarea onChange = {props.inputHandler}
          name = 'newtext'
          className = 'new-text'
          placeholder = 'Note text here!'
        />

        <Link className = 'save' to = '/'>
          <button onClick = {props.noteSubmit}>Save this note</button>
        </Link>
      </div>
    </div>
  );
};

export default AddNote;
