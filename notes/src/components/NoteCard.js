import React from "react";
import {Link} from "react-router-dom";

const NoteCard = props => (
    <div>
        <Link to={`/view/${props.id}`}><h5>{props.note.title}</h5></Link>
        <p>{props.note.text}</p>
    </div>
);

export default NoteCard;