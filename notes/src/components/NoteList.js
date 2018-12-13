import React from "react";
import Note from "./Note";
import "./notelist.css";
const Notelist = props => {
  function routeToNote(ev, note) {
    ev.preventDefault();
    props.history.push(`/note/${note._id}`);
    props.getNoteById(note._id);
  }

  return (
    <div className="note-list-container">
      <h2>Your Notes:</h2>
      <div className="notes-container">
        {props.notes.map(note => (
          <div onClick={e => routeToNote(e, note)} key={note._id}>
            <Note
              {...props}
              id={note._id}
              textBody={note.textBody}
              title={note.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notelist;
