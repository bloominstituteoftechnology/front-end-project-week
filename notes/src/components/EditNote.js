import React from 'react';
import './CreateNote.css';
import { NavLink, Link } from 'react-router-dom';

function CreateNote(props) {
  // console.log("you called NewNote from NoteList");
  return (
    <div className="newNoteDiv">
      <div className="leftBar">
        <div>
          <h1>Lambda</h1>
          <h2>Notes</h2>
          <NavLink to="/"><button className="btns">View Your Notes</button></NavLink>
          
          <NavLink to="/createnote"><button className="btns">+Create New Note</button></NavLink>
        </div>
      </div>
      <div className="rightBar">
        <div>
          <h3>Edit Note:</h3>
        </div>
        <form>
              <input className="contentForm" value={"Insert Note Title here"} />
            </form>
          <div>
            <form>
              <input className="contentForm" value={"Insert Note Content here"} />
            </form>
          </div>
        <div>
        <NavLink to="/">
            <button className="btns">Save</button>
          </NavLink>
            Save
          
        </div>
      </div>
    </div>
  );
}

export default CreateNote;