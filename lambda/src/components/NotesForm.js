import React from "react";
import { Link } from "react-router-dom";
import SideView from "./SideView";

// TweenMax.to(".note", 2, { left: 300 });

const NotesForm = props => {
  console.log("THIS IS PROPS: ", props);
  return (
    <div className="Background-color">
      <div className="Main-container">
        <h2>Notes:</h2>
        <div className="Notes-container">
          {Array.from(props.notes).map(note => (
            <div className="note" key={note.id}>
              <Link to={`/notes/${note.id}`}>
                <div className="Note-info">
                  <div className="NoteTitle">{note.title}</div>
                  <p>{note.content}</p>
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
