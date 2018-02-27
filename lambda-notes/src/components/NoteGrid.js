import React from 'react';
import './NoteGrid.css';

function NoteGrid(props) {
  return (
      <div className="row justify-content-between">
        {props.notes.map(note => {
          return (
            <div key={note.id} className="col-md-4 ">
              <div className="note">
              <h3>{note.title}</h3>
              <hr />
              <p>{note.body}</p>
            </div>
            </div>
          );
        })}
    </div>
  );
}
export default NoteGrid;
