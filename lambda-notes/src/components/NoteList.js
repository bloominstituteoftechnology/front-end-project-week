import React, { Component } from "react";
import Note from "./Note.js";
import { Link } from "react-router-dom";

const NoteList = props => {
    return (
        <div>
            {props.notes.map(note => {
                return (
                    <Link to={`/note/${note.id}`} key={note.id}><Note /></Link>
                );
            })}
        </div>
    );
}

export default NoteList;
