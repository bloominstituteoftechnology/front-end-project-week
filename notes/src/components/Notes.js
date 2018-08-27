import React from "react"
import Note from './Note'
import {Row}  from 'reactstrap';
import {Link } from 'react-router-dom'


const Notes = props => {
  console.log("notes", props.notes, props.note)
  return (
    <div>
    {props.notes.map(note => (
      <Link to = {`/notes/${note.id}`}>
      <Note note={note} key={props.notes.id}/>
      </Link>
    ))}
  </div>
  );
};

export default Notes;
