import React from "react"
import Note from './Note'
import {Container, CardGroup}  from 'reactstrap';
import {Link } from 'react-router-dom'


const Notes = props => {
  console.log("notes", props.notes, props.note)
  return (
    <Container>
      <CardGroup>
    {props.notes.map(note => (
      <Link to = {`/notes/${note.id}`}>
      <Note note={note} key={props.notes.id}/>
      </Link>
    ))}
    </CardGroup>
  </Container>
  );
};

export default Notes;
