import React from "react";
import NoteView from './noteView';
const FullView = props => {
    return (
      <div className="container">
        <ul>
          {props.notes.map(note => {
            return <NoteView key={note.id} note={note} />;
          })}
        </ul>
      </div>
    );
  };
  
  export default FullView;