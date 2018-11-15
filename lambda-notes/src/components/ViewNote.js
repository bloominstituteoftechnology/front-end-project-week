import React, { Component } from 'react';

function ViewNote(props) {
  console.log(props.notes);
  return (
    <div className="pageWrapper">
      <div>
        <div>edit</div>
        <div>delete</div>
      </div>
      {props.notes.map(note => {
        if (props.match.params.id === note._id) {
          console.log(note.title);
          return (
            <div>
              <p className="viewNoteTitle">{note.title}</p>
              <p className="viewNoteBody">{note.textBody}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ViewNote;
