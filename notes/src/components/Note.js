import React from 'react';
import {Link} from 'react-router-dom';

let Note = props => {
    // simple return of the note title and text, wrapped in a link to the full page note.
    return (
        <Link  to={`/notes/${props.note._id}`}>
            <div className='note'>
                <h2>{props.note.title}</h2>
                <p>{props.note.textBody}</p>
            </div>
        </Link>
    )
}

export default Note;