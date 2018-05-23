import React from 'react';
import { Link } from 'react-router-dom';


const Note = props => {
    return (
        <Link to={`/note/${props.notes.id}`}>
            <div>
                <h4>{props.notes.title}</h4>
                <p>{props.notes.body}</p>
            </div>
        </Link>
    )
}

export default Note;