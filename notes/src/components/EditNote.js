import React from "react";

const EditNote = props => {
  const note = props.notes.find(
    note => props.match.params.id === `${note._id}`
  );
  const editNotes = () => {
    props.editNote(note._id);
    props.history.push(`/notes/${note._id}`);
  };
  return (
    <div className="createNote">
      <h4 className="createNoteHeader">Edit Note:</h4>
      <form className="createNoteForm">
        <input
          type="text"
          placeholder="Note Title"
          value={props.editTitle}
          name="editTitle"
          onChange={props.changeHandler}
          className="newTitle"
        />
        <input
          type="text"
          placeholder="Note Comment"
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
