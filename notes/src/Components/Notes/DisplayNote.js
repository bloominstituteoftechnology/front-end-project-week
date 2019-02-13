import React from 'react';
import {Link} from 'react-router-dom';

import './notes.css';

const DisplayNote = props => {
    const note = props.notes.find(note => {
        console.log(`Note find -> ${note.id}`)
        
        if(String(note.id) === props.match.params.id) {
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
                <div className='note-links-container'>
                    <Link className='note-link' to={`${note.id}/edit`}>Edit</Link>
                    <Link className='note-link' to={`${note.id}/delete`}>Delete</Link>
                </div>
                <div className='note-title'>{note.title}</div>
            </header>
            <div className='note-break'/>
            <div className='note-body'>{note.content}</div>
        </div>
    )
}

export default DisplayNote;