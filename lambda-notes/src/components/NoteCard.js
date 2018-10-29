import React from 'react';
import { Link } from "react-router-dom";

const NoteCard = props => {
    return (
        <div>
            <Link to={`/note/get/${props.id}`}>
                <h2>{props.note.title}</h2>
            </Link>
        </div>
    );
}

export default NoteCard;