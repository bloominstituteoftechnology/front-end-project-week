import React from 'react';
import { Link } from "react-router-dom";
import "./NoteCard.css"

const NoteCard = props => {
    return (
        <Link to={`/note/${props.note._id}`}>
            <div className="notecard">
                <h3>{props.note.title.length > 15 ?
                        props.note.title.substring(0, 15) + "..." :
                        props.note.title}</h3>
                <p>{props.note.textBody.length > 75?
                        props.note.textBody.substring(0, 75) + "..." :
                        props.note.textBody}</p>
            </div>
        </Link>
    )
}

export default NoteCard;