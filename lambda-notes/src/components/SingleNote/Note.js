import React from "react";

export const Note = props => {
  const note = props.notesList.find(
    note => note._id === props.match.params.noteId
  );
  console.log("i am note", note);
  console.log(props);

  const handleDelete = () => {
    props.handleDeleteNote(note._id);
    props.history.push("/notes");
  };

  return (
    <div className="single-note-wrap">
      <nav>
        <button
          onClick={event => {
            event.preventDefault();
            props.goToUpdateNoteForm(event, note._id);
          }}
        >
          edit
        </button>
        <button onClick={handleDelete}>delete</button>
      </nav>
      {note ? (
        <div>
          <h3>{note.title}</h3>
          <p>{note.textBody}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
