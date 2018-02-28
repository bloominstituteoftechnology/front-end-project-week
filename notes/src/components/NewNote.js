import React from 'react';
import './NewNote.css';

function NewNote(props) {
  console.log(props.abc.lastId);
  return (
    
    <div className="newNoteDiv">
      <div className="leftBar">
        <div>
          <h1>Lambda</h1>
          <h2>Notes</h2>
          <button className="btns">View Your Notes</button>
          <button className="btns">+ Create New Note</button>
        </div>
      </div>
      <div className="rightBar">
        <div>
          <h3>Create New Note</h3>
        </div>
        <div>
          <form >
            <input className="titleForm" placeholder="Note Title"/>
          </form>
        </div>
        <div>
          <form>
            <input className="contentForm" placeholder="Note Content" />
          </form>
        </div>
        <div>
          <button className="btns">Save</button>
        </div>
      </div>
    </div>
  );
}

export default NewNote;
