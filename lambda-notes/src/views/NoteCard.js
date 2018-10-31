import React from 'react';
import { Link } from "react-router-dom";

const NoteCard = props => {
    console.log(props.note._id)
    return (
        <div>
            <Link to={`/note/get/${props.note._id}`}>
                <h2>{props.note.title}</h2>
            </Link>
        </div>
    );
}

export default NoteCard;