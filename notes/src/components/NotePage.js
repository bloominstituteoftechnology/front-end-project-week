import React from "react";
import axios from "axios";

import "../styles/App.css";
import "../styles/NotePage.css";

 const NotePage = props => {

  if (props.notes.length) {
    let note = props.notes.find(
      note => `${note._id}` === props.match.params.id
    );

    const deleteHandler = e => {
      e.preventDefault();
      props.deleteNote(note._id);
      props.history.push("/");
    };
    return (
      <div className="componentContainer">
        <div className="spanButtonsContainer">
          <a href={`/note/${note._id}/edit`}>edit</a>
          <span onClick={deleteHandler}>delete</span>
        </div>
        <h2>{note.title}</h2>
        <p className="noteText">{note.textBody}</p>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default NotePage
