
import React from 'react';
import {Link} from 'react-router-dom';
import './NewNoteForm.css';


const NewNoteForm = props => {


  
    return (
      <div className="new-note">
        <h3 className="title">Create New Note:</h3>
        <form className="form" onSubmit={props.addNote}>
          <textarea className="note-title" onChange={props.handleInputChange} type="text" name="title" placeholder="Title" value={props.title} />
          <textarea className="note-text"  onChange={props.handleInputChange} type="text" name="text" placeholder="Note" value={props.text}/>
          <button>
            Add Note
          </button>
        </form>
      </div>
    );
};





export default NewNoteForm;



