import React from "react";

import "../styles/App.css";
import "../styles/NotePage.css";

const NotePage = props => {
  let note = props.notes.find(note => `${note.id}` === props.match.params.id);
  const deleteHandler = e => {
    e.preventDefault();
    props.deleteNote(note.id);
    props.history.push("/");
  };

  return (
    <div className="componentContainer">
      <div className="spanButtonsContainer">
        <a href={`/note/${note.id}/edit`}>edit</a>
        <span onClick={deleteHandler}>delete</span>
      </div>
      <h2>{note.title}</h2>
      <p className="noteText">{note.text}</p>
    </div>
  );
};

export default NotePage;
