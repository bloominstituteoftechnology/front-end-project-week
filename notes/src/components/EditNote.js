import React from "react";

const EditNote = props => {
  const note = props.notes.find(
    note => props.match.params.id === `${note.id}`
    );

  const editNotes = () => {
    props.editNote(note.id);
    props.history.push(`/notes/${note.id}`);
  };
  
  return (
    <div className="createNote">
      <h4 className="createNoteHeader">Edit Note:</h4>
      <form className="createNoteForm">
        <input
          type="text"
          placeholder="Edit Title here"
          value={props.editTitle}
          name="editTitle"
          onChange={props.changeHandler}
          className="newTitle"
        />
        <input
          type="text"
          placeholder="Edit Note Comment Here"
          value={props.editTextBody}
          name="editTextBody"
          onChange={props.changeHandler}
          className="newTextBody"
        />
        <button onClick={editNotes}>Save</button>
      </form>
    </div>
  );
};

export default EditNote;
