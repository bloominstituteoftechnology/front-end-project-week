import React from 'react';
import loremipsem from '../loremipsem';
const Note = (props) => (
  <div className="option">
    <div key={props.note.id}>
      <div className="note-component">
        <div className="note-header">
          <h4>{props.note.Title}</h4>
        </div>
        <p>{props.note.noteText}</p>
      </div>
    </div>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.note.noteText);
      }}
    >
      remove
      </button>
  </div>
);

export default Note;