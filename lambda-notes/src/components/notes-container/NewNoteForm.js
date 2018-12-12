//created in NotesContainer via routing 
import React from 'react';

const NewNoteForm = props => {

    return (
      <div className="NewForm">
        <form onSubmit={props.addNewNote}>
        <label htmlFor="title"/>
          <input
            type="text"
            onChange={props.handleInputChange}
            placeholder="Title"
            value={props.newTitle}
            name="newTitle"
          />
             <label htmlFor="content"/>
          <input
            type="text"
            onChange={props.handleInputChange}
            placeholder="Note"
            value={props.newNote}
            name="newNote"
          />
          <button type="submit">Add New Note</button>
        </form>
      </div>
    );
  }

  export default NewNoteForm 
