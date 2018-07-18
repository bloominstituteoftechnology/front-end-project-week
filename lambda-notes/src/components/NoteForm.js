import React from "react";
import { Link } from "react-router-dom";

const NoteForm = props => {
  return (
    <div className="note-form-div">
      <h2 className="note-form-title">Create New Note:</h2>
      <form>
        <input
          name="title"
          placeholder="      Note Title"
          onChange={props.handleInputChange}
          value={props.title}
          type="text"
          className="note-form"
          size='40'
        />
        <br />
        <br />
        <textarea
          type="text"
          cols="70"
          rows="7"
          name="content"
          placeholder="    Note Content"
          className="note-form-content"
          onChange={props.handleInputChange}
          value={props.content}
        />
        <Link to='/' >
          <button type='button' onClick={props.handleAddNote} className="save-button">Save</button>
        </Link>
      </form>
    </div>
  );
};
// }

export default NoteForm;
