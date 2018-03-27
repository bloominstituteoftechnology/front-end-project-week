import React from 'react';
import './NoteEdit.css';

const NoteEdit = () => (
  <div className="noteEditContainer">
    <h2 className="noteEditHeader">Edit Note:</h2>
    <div className="formContainer">
      <input type="text" name="noteTitle" className="noteTitle" placeholder="Note Title"></input>
      <br />
      <textarea name="noteBody" className="noteBody" placeholder="Note Content"></textarea>
      <br />
    </div>
    <button className="noteEditButton">Update</button>
  </div>
);

export default NoteEdit;
