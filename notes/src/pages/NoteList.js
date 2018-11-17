import React from "react";
import NoteCard from "../components/NoteCard";

const NoteList = props => (
    <div className="note-list">
        <h3 className="subtitle-font">Your Notes:</h3>
        <div className="note-container">
            {props.notes.map((note, index) => <NoteCard key={index} id={index} note={note} /> )}
        </div>
    </div>
);

export default NoteList;