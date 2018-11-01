import React from "react";

const NoteEdit = props => {
  const note = props.notes.find(
    note => props.match.params.id === `${note._id}`
  );

  console.log(props);

  const editNotes = event => {
    event.preventDefault();
    props.editNote(note._id);
    props.history.push(`/note/get/${note._id}`);
  };

  return (
    <div className="edit">
      <form className="form">
        <h2>Edit Note:</h2>
        <input
          type="text"
          name="updatedTitle"
          placeholder="Title"
          onChange={props.handleInputChange}
          value={props.updatedTitle}
          className="noteForm__input"
        />
        <input
          name="updatedTextBody"
          id=""
          cols="30"
          rows="10"
          placeholder="Note Content"
          onChange={props.handleInputChange}
          value={props.updatedTextBody}
          className="noteForm__input--big"
        />
        <button className="btn" onClick={editNotes}>
          Update
        </button>
      </form>
    </div>
  );
};

export default NoteEdit;
