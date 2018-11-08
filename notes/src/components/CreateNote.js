import React from "react";
import '../css/createNote.css';

const CreateNote = props => {
  const createNewNote = () => {
    props.addNote();
    props.history.push("/");
  };
  return (
    <div className="createNote">
        <h4>Create New Note:</h4>
      <form className="createNoteForm">
        <input
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
