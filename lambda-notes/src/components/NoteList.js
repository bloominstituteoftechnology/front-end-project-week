import React, { Component } from "react";
import Note from "./Note.js";
import { Link } from "react-router-dom";

const NoteList = props => {
    return (
        <div>
            {props.notes.map(note => {
                return (
                    <Link to={`/Note/${note.id}`} key={note.id}>
                    		<Note note={note} />
                    </Link>
                );
            })}
        </div>
    );
}

export default NoteList;
