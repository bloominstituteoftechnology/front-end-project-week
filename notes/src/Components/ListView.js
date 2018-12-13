import React from "react";
import "./ListView.css";
import { Link } from "react-router-dom";
import Notes from "./Notes.js";

const linkStyles = {
  textDecoration: "none"
};

const ListView = props => {
  return (
    <div className="listView">
      <div className="note-title"> Your Notes:</div>
      <ul className="note-grid">
        {props.notes.map(note => {
          //  console.log("note", note);
          return (
            <div key={note.id} className="note-box">
              <Link
                style={linkStyles}
                to={{ pathname: `/noteView/${note.id}`, state: note }}
              >
                <Notes note={note} />
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ListView;
