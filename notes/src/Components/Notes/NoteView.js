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
        <div className = 'noteView'>
            <header className = 'noteViewHeader'>
                <div className = 'noteLinksContainer'>
                    <Link className='noteLink' to={`${note._id}/edit`}>
                        Edit
                    </Link>
                    <Link className='noteLink' to={`${note._id}/delete`}>
                        Delete
                    </Link>
                </div>
                <div className = 'noteTitle'>
                    {note.title}
                </div>
            </header>
            <div className = 'lineBreak' />
            <div className = 'noteBody'>
                {note.textBody}
            </div>
        </div>
    )
}

export default NoteView;