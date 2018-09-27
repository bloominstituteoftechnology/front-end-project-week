import React from "react";
import { Link } from "react-router-dom";
import SideView from "./SideView";

const NotesForm = props => {
  console.log("THIS IS PROPS: ", props);
  return (
    <div className="Background-color">
      <div className="Main-container">
        <h2>Notes:</h2>
        <div className="Notes-container">
          {Array.from(props.notes).map(note => (
            <div className="note" key={note._id}>
              <Link to={`/notes/${note._id}`}>
                <div className="Note-info">
                  {note.title}
                  <p>{note.textBody}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <SideView />
    </div>
  );
};

export default NotesForm;
