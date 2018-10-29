import React from 'react';
import { Route, Link } from "react-router-dom";
import "./NoteCard.css"

const NoteCard = props => {
    return (
        <Link to={`/note/${props.note._id}`}>
            <div className="notecard">
                <h3>{props.note.title}</h3>
                <p>{props.note.textBody}</p>
            </div>
        </Link>
    )
}

export default NoteCard;