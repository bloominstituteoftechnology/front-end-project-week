import React, { Component } from 'react';

// import Note from './Note';

 const Note = props => {
    return (
      <div className="note">
        <h3>{props.note.title}</h3>
        <p>{props.note.textBody}</p>
      </div>
    )
}

export default Note
