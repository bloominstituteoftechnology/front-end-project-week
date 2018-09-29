import React, {Fragment} from "react";
import Note from './Note';
import NoteForm from './NoteForm';
import { Link, Route } from "react-router-dom";

const NoteView = (props) => {
   const note = props.notes.find(
     note => note._id === props.match.params.noteId);//?
console.log(note);

  return (
    <Fragment>
           {/* <Note note={note} noteTitle={props.note.title} noteBody={props.note.textBody} /> */ }
          <h2>{props.note.title}</h2> 
          <h4></h4>

    </Fragment>
  );
}

export default NoteView;
      