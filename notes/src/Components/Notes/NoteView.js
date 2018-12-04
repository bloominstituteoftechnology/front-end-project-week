import React from 'react';
import {Link} from 'react-router-dom';

const NoteView = props => {
    const note = props.notes.find( note => {
        if (note._id === props.match.params.id) {
            return note;
        }
        return (undefined);
    });

    if (note === undefined) {
        return (
            <h1>
                Sorry, there's no note with that ID!
            </h1>
        )
    }
    
    return (
        <div>
            <header>
                <div>
                    <Link className='note-link' to={`${note._id}/edit`}>
                        Edit
                    </Link>
                    <Link className='note-link' to={`${note._id}/delete`}>
                        Delete
                    </Link>
                </div>
                <div>
                    {note.title}
                </div>
            </header>
            <div>
                {note.textBody}
            </div>
        </div>
    )
}

export default NoteView;