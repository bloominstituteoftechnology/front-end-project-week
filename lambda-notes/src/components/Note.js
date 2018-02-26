import React, { Component } from 'react';
import '../css/index.css';

const Note = (props) => {
  return (
    <div className="Note">
      <div className="Note__header">
        This is the header for a focused note.
      </div>
      <div className="Note__content">
        This is the content of a note, lorem ipsum
      </div>
    </div>
  )
}

export default Note;