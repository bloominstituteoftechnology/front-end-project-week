import React, {Fragment} from "react";
import Note from './Note';
import NoteForm from './NoteForm';
import { Link, Route } from "react-router-dom";

const NoteView = (props) => {
   const note = props.notes.find(note => note._id === props.match.params.id);//?
console.log(note);

  return (
    <Fragment>
            <Note note={note} noteTitle={props.note.title} noteBody={props.note.textBody} /> 

    </Fragment>
  );
}

export default NoteView;
      