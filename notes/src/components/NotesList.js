import React from "react";
import NoteCard from "./NoteCard";
import { Link } from "react-router-dom";

export default function NotesList(props) {
  return props.notes.map(note => (
    <Link to={`note/${note.id}`} style={{ textDecoration: "none" }}>
      <NoteCard 
        notes={props.notes} 
        key={note.id} 
        id={note.id} 
        note={note} />
    </Link>
  ));
}
