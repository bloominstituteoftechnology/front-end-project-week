import React from "react"
import Note from './Note'


const Notes = props => {
  console.log("notes", props.notes)
  return (
    <div>
    {props.notes.map(note => (
      <Note note={note} key={props.notes.id}/>
    ))}
  </div>
  );
};

export default Notes;
