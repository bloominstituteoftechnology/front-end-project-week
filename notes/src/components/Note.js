import React, { Fragment } from 'react';
import axios from 'axios';
import '../App.css';


function Note(props) {
  console.log(props);
  const note = props.notesList.find(note=> note._id === parseInt(props.match.params.noteId), 10);

  function handleDelete() {
    props.handleDeleteNote(note);
    props.history.push('/notes');
  }

  if (props.isLoading || props.notesList.length === 0) return <h2>Loading data...</h2>;
 
  return (
    <Fragment>
      <div className='note-div'>
      <div className="note-wrapper">
        <h1>{props.note.title}</h1>
        <h4>({props.note.textBody})</h4>
      </div>
      <div className='buttons-div'>
      <button 
        className="button" 
        onClick={event => {
          event.preventDefault();
          props.goToUpdateNoteForm(event, props.noteId)
        }}>Update Note</button>
      <button className="button" onClick={handleDelete}>Delete Note</button>
      </div>
      </div>
    </Fragment>
  );
}


export default Note;

