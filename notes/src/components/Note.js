// *** === Imports === *** //
// React
import React from 'react';

// React Router
import {
    Link
} from 'react-router-dom';


// *** === Functional Component === *** //
const Note = props => {
    return (
        <div className='notes-container'>
            <h1>{props.note.title}</h1>

            <p>{props.note.textBody}</p>

            <Link to={`/note/${props.note._id}/update`}>
                <button>Edit Note</button>
            </Link>
            <button onClick={props.handleDelete}>Delete Note</button>
        </div>
    );
};


// *** === Default Export === *** //
export default Note;