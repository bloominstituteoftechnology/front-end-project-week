import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Note = props => {
  console.log(props);
  const note = props.notesList.find(
    note => note.id === parseInt(props.match.params.noteId, 10)
  );

  const handleDelete = () => {
    props.handleDeleteNote(note.id);
    props.history.push("/notes");
  };

  if (props.isLoading || props.notesList.length === 0)
    return <h2>Loading notes...</h2>;

  return (
    <Fragment>
      <nav>
        <Link to={`/notes/${note.id}/edit`}>Edit</Link>
        <Link to={`/notes/${note.id}/delete`}>Delete</Link>
      </nav>
      <h1>{note.title}</h1>
      <h3>{note.body}</h3>
      <button
        className="material-button-raised"
        onClick={event => {
          event.preventDefault();
          props.goToUpdateNoteForm(event, note.id);
        }}
      >
        Update Note
      </button>
      <button className="material-button-raised" onClick={handleDelete}>
        Delete Note
      </button>
    </Fragment>
  );
};

export default Note;
