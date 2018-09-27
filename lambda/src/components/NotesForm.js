import React from "react";
import { Link } from "react-router-dom";

const NotesForm = props => {
  console.log("THIS IS PROPS: ", props);
  return (
    <div className="Main-container">
      <h2>Notes:</h2>
      <div className="Notes-container">
        {Array.from(props.notes).map(note => (
          <div className="note" key={note._id}>
            <Link to={`/notes/${note._id}`}>
              <div className="Note-title">{note.title}</div>
              <p>{note.textBody}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesForm;
