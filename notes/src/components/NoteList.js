import React from "react";
import { Link } from "react-router-dom";
import NoteCard from "./NoteCard";
import "./NoteList.css";

const NoteList = props => {
  return (
    <div className="NoteList-area">
      <h2 className="NoteList-title">Your Notes:</h2>
      <div className="NoteList-container">
        {props.notes.map((note, index) => (
          <Link key={`note${index}`} to={`/view/${note.id}`} className="NoteList-link">
            <NoteCard {...note} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
