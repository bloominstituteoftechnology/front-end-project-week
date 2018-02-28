import React, { Component } from 'react';
import '../css/index.css';
import { Link } from 'react-router-dom';

export const NoteList = (props) => {
  return (
    <div className="NoteList">
      <div className="NoteList__header">
        This is the header for the notes.
      </div>
      <div className="NoteList__card-container">
        {
          props.notes.map((note) => {
            return (
              <Link key={note.id} className="NoteList__card" to={`/note/${note.id}`}>
                <div className="NoteList__card-header">
                  {note.title}
                </div>
                <div className="NoteList__card-content">
                  {note.text}
                </div>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
}
