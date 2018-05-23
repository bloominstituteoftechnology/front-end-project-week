import React from "react";
import { Link } from "react-router-dom";
import NoteCard from './NoteCard';
import { Col, Card, Row, Container } from "reactstrap";

const NoteList = props => {
  console.log("NoteList", props.notes);
return (
    <Col sm="8">
    {props.notes.map(note => (
   <Link to={`notes/${note.id}`}>
        <NoteCard key={note.id} note={note}  />
    </Link>
    ))}
    </Col>
    
)}
   
    export default NoteList;
    
//     <Link to={`/notes/${props.id}`}>
// <div>
// <h3>{props.title}</h3>
// <p>{props.content}</p> 
// </div>
// </Link>
// );
// };