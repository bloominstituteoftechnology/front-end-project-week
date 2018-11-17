import React from "react";

import "../styles/App.css";
import "../styles/CreateNote.css";
import "../styles/Sidebar.css";

const EditNote = props => {

  if (props.notes.length) {

    let note = props.notes.find(
      note => `${note._id}` === props.match.params.id
    );

  const push = () => {
    props.history.push(`/note/${note._id}`)
  }
  
  const updateNoteHandler = e => {
    e.preventDefault();
    props.updateNote(note._id)
    setTimeout( push , 50)
    
  }

    return (
      <div className="componentContainer">
        <h2>Edit Note:</h2>
        <form onSubmit={updateNoteHandler} method="post">
          <input
            type="text"
            name="title"
            value={props.newNote.title}
            onChange={props.inputChange}
            placeholder="Note Title"
          />
          <textarea
            cols="50"
            rows="25"
            name="textBody"
            value={props.newNote.textBody}
            onChange={props.inputChange}
            placeholder="Note Content"
          />

          <button type="submit" className="sidebarButton createButton">Save</button>
        </form>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default EditNote;
