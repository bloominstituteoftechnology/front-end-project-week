import React from "react";
import { Link } from "react-router-dom";

const NoteForm = props => {
  return (
    <div>
      <form className="newNote-Form">
        <h1>Create New Note:</h1>
        <input
          className="new-title"
          name="title"
          type="text"
          placeholder="Note Title"
          value={props.title}
          onChange={props.noteChange}
        />
        <input
          className="new-content"
          type="textarea"
          name="textbody"
          placeholder="Note Content"
          value={props.textbody}
          onChange={props.noteChange}
        />
        
        <Link to="/notes">
          <div onClick={event => props.newNote(event, props.history.push)} className="save-button">Save</div>
        </Link>
      </form>
    </div>
  );
};

export default NoteForm;
