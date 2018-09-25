import React, { Fragment } from 'react';
import axios from 'axios';
import '../App.css';


function Note(props) {

  function handleDelete() {
    props.handleDeleteNote(props.note.id);
    props.history.push('/notes');
  }

  return (
    <Fragment>
      <div className="note-wrapper">
        <h1>{props.note.title}</h1>
        <h4>({props.note.textBody})</h4>
      </div>
      <div className='buttons-div'>
      <button 
        className="button" 
        onClick={event => {
          event.preventDefault();
          props.goToUpdateNoteForm(event, props.note.id)
        }}>Update Note</button>
      <button className="button" onClick={handleDelete}>Delete Note</button>
      </div>
    </Fragment>
  );
}


export default Note;

