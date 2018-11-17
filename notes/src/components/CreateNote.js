import React from "react";


import '../styles/App.css';
import "../styles/Sidebar.css";
import "../styles/CreateNote.css";

const CreateNote = props => {

  if (props.notes.length) {
  
  const newNoteHandler = e => {
    e.preventDefault();
    props.addNote()
    props.history.push("/");
  }

    return (
      <div className="componentContainer">
        <h2>Create New Note:</h2>
        <form onSubmit={newNoteHandler} method="post">
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

export default CreateNote;
