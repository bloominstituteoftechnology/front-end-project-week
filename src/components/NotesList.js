import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const NotesList = props => {
  return (
    <div className="notes-list-div">
      <p className="notes-list-title">Your Notes: </p>
      <div className="notes-list-sort-div">
      {props.sorted ? 
        <div className="notes-list-sort" onClick={props.handleSortZA}>
          Sort Z-A
          </div>
          :
        <div className="notes-list-sort" onClick={props.handleSortAZ}>
          Sort A-Z
        </div>
      }
       
      </div>
      <ul className="notes-list">
        {props.notes.map(note => {
          return (
            <div className="note-box" key={note.id}>
            <Link className="note-link" to={`/notes/${note.id}`} key={note.id}>
              <p className="note-link-title">{note.title.substring(0, 20)}</p>
              <hr className="note-link-hr" />
              </Link>
              <p>{note.content.substring(0, 150)}</p>
              <div className="note-box-delete-div">
              <Link className="note-box-delete-link" to={`/notes/${note.id}`} onClick={props.toggleDeleting}>
              <p className="note-box-delete">delete</p>
              </Link>
              </div>
              </div>
          );
        })}
      </ul>
    </div>
  );
};

export default NotesList;
