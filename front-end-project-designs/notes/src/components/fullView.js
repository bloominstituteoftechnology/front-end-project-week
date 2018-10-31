import React from "react";
import NoteView from './noteView';
import Form from './form';
import {Link} from 'react-router-dom';
const FullView = props => {
    return (
      <div className="container">
        <ul>
          {props.notes.map(note => {
            return <NoteView key={note.id} note={note} handleDelete={props.handleDelete} />;
          })}
        </ul>
        {/* <Form handleChanges= {props.handleChanges}
              addNewNote={props.addNewNote} */}
        <Link to='/form'>Link to form</Link>
      </div>
    );
  };
  
  export default FullView;