import React, { Component } from 'react';
import '../css/index.css';

export const NoteList = (props) => {
  return (
    <div className="NoteList">
      <div className="NoteList__header">
        This is the header for the notes.
      </div>
      <div className="NoteList__card-container">
        {
          props.notes.map((note, i) => {
            return (
              <div key={i} className="NoteList__card">
                <div className="NoteList__card-header">
                  {note.title}
                </div>
                <div className="NoteList__card-content">
                  {note.text}
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
