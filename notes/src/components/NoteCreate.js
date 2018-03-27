import React from 'react';
import './NoteCreate.css';

const NoteCreate = () => (
  <div className="noteCreateContainer">
    <h2 className="noteCreateHeader">Create New Note:</h2>
    <div className="formContainer">
      <input type="text" name="noteTitle" className="noteTitle" placeholder="Note Title"></input>
      <br />
      <textarea name="noteBody" className="noteBody" placeholder="Note Content"></textarea>
      <br />
    </div>
    <button className="noteCreateButton">Save</button>
  </div>
);

export default NoteCreate;
