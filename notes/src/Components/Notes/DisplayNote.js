import React from 'react';
import {Link} from 'react-router-dom';

import './notes.css';

const DisplayNote = props => {
    const note = props.notes.find(note => {
        if(note._id === props.match.params.id) {
            return note;
        }
        return undefined;
    })

    if (note === undefined) {
        return <h1>No note by that ID</h1>
    }
    return (
        <div className='display-note'>
            <header className='note-header'>
                <div className='note-title'>{note.title}</div>
                <form>
                    <Link to={`${note._id}/edit`}>Edit</Link>
                    <Link to={`${note._id}/delete`}>Delete</Link>
                </form>
            </header>
            <div className='note-break'/>
            <div className='note-body'>{note.textBody}</div>
        </div>
    )
}

export default DisplayNote;