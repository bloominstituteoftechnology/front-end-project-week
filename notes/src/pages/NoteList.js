import React from "react";
import NoteCard from "../components/NoteCard";

const NoteList = props => (
    <div>
        <h3>Your Notes:</h3>
        <div>
            {props.notes.map((note, index) => <NoteCard key={index} id={index} note={note} /> )}
        </div>
    </div>
);

export default NoteList;