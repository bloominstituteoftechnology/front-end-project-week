import React from "react";
import NoteView from './noteView';
import Form from './form';
const FullView = props => {
    return (
      <div className="container">
        <ul>
          {props.notes.map(note => {
            return <NoteView key={note.id} note={note} />;
          })}
        </ul>
        <Form handleChanges= {props.handleChanges}
              addNewNote={props.addNewNote}
        />
      </div>
    );
  };
  
  export default FullView;