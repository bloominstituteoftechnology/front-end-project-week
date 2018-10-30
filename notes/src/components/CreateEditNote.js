import React from "react";

export default function CreateEditNote(props) {
  function handleSubmit(event) {
    event.preventDefault();

    if (props.updatingNote) {
      props.handleUpdateNote();
    } else {
      props.handleAddNote(event);
    }
  }

  return (
    <div className="form-wrapper">
      <h2>{props.updatingNote ? "Edit Note" : "Create New Note"}</h2>
      <form className="note-form">
        <div className="note-title">
          <input
            className="note-title-input"
            type="text"
            placeholder="Note Title"
            value={props.note.title}
            name="title"
            onChange={props.handleChange}
          />
        </div>

        <div className="note-title">
          <input
            className="note-title-input"
            type="number"
            placeholder="User ID"
            value={props.note.user_id}
            name="user_id"
            onChange={props.handleChange}
          />
        </div>

        <div className="note-text">
          <textarea
            className="note-text-input"
            type="text"
            placeholder="Note Text"
            value={props.note.note_text}
            name="note_text"
            onChange={props.handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
