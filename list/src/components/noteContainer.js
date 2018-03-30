import React from "react";
import "./noteContainer.css";
import {Link} from 'react-router-dom';

export const NoteContainer = props => {
  const contentChecker = note => {
    return note.content && note.content.length > 120
      ? note.content.substr(0, 124) + " ..."
      : note.content;
  };
  return (
    <div className="notesContainer">
      <h1 className="header">Your Notes: </h1>
      <div className="cardContainer">
        {props.notes.map(note => {
          {console.log(props.notes)}
          return (
            <Link key={note.id} className="noteLink" to={`/viewnote/${note.id}`}>
              <div className="noteCard">
                <h4 className="noteTitle">{note.title}</h4>
                <div className="noteContent">{contentChecker(note)}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
