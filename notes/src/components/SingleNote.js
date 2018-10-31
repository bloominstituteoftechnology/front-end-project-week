import React from "react";

export default function SingleNote(props) {
  const note = props.notesList.find(note => note.id == props.match.params.id);
  console.log("Single Note", note, props);

  function handleDelete() {
    props.handleDeleteNote(note.id);
    props.history.push("/");
  }

  function confirmDelete() {
    let c = window.confirm("Are you sure you want to delete this note?");
    if (c == true) {
      handleDelete();
    } else {
      null;
    }
  }

  return note ? (
    <div className="single-note">
      <div className="single-note-text">
        <h3>{note.title}</h3>
        <p>{note.note_text}</p>
      </div>
      <div classname="note-buttons">
        <button
          onClick={event => {
            event.preventDefault();
            props.goToUpdateForm(event, note.id);
          }}
        >
          Edit
        </button>
        <button className="delete" onClick={confirmDelete}>
          Delete
        </button>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
