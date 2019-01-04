// *** === Imports === *** //
// React
import React from 'react';

// React Router
import {
    Link
} from 'react-router-dom';

// Styles
import {
    Logo,
    Button
} from '../styles';


// *** === Functional Component === *** //
const Note = props => {
    return (
        <div className='notes-container'>
            <Logo>{props.note.title}</Logo>

            <p>{props.note.textBody}</p>

            <Link to={`/note/${props.note._id}/update`}>
                <Button>Edit Note</Button>
            </Link>
            <Button onClick={props.handleDelete}>Delete Note</Button>
        </div>
    );
};


// *** === Default Export === *** //
export default Note;