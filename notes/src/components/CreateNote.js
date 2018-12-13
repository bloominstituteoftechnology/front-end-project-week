import React from "react";
import '../css/createNote.css';

const CreateNote = props => {
  const createNewNote = () => {
    props.addNote();
    props.history.push("/notes");
  };
  return (
    <div className="createNote">
        <h4 className="createNoteHeader">Create New Note:</h4>
      <form className="createNoteForm">
        <input
          cols="30"
          rows="10"
          type="text"
          placeholder="Note Title"
          name="title"
          value={props.title}
          onChange={props.changeHandler}
          className="newTitle"
        />
        <input
          type="text"
          placeholder="Note Content"
          name="textBody"
          value={props.textBody}
          onChange={props.changeHandler}
          className="newTextBody"
        />
      </form>
      <button onClick={createNewNote}>Save</button>
    </div>
  );
};

export default CreateNote;
