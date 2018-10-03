import React from "react";
import {Link} from "react-router-dom";

const Note = (props) => {
    return (
        <Link to={`/note-view/${props.note.id}`} className='note'>
                <h3>{props.note.title}</h3>
                <p>{props.note.text}</p> 
        </Link>
    )
}

export default Note;