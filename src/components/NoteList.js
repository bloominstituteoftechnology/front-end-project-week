import React from "react";
import { Link } from "react-router-dom";

const NoteList = props => {
  return (
    <div>
      <div className="container1">
        <div className="noteList-title">Your Notes: </div>
        {props.notes.map(note => {
          return (
            <Link key={note.id} to={`view/${note.id}`}>
              <div  className="Note">
                <div className="note-title">
                  <div>{note.title}</div>
                </div>
                <div className="note-content">{note.content}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NoteList;
