import React from "react";

const NoteCard = props => (
    <div>
        <h5>{props.note.title}</h5>
        <p>{props.note.text}</p>
    </div>
);

export default NoteCard;