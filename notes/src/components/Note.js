import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {
    return (
        <div className='notes-container'>
            <h1>{props.note.title}</h1>
            <p>{props.note.textBody}</p>
            <Link to={`/note/${props.note._id}/update`}>
                <button>Edit Note</button>
            </Link>
        </div>
    )
}

export default Note;