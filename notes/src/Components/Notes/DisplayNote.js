import React from 'react';
import {Link} from 'react-router-dom';

import './notes.css';

const DisplayNote = props => {
    const note = props.notes.find(note => {       
        if(String(note.id) === props.match.params.id) {
            return note;
        }
        return undefined;
    })

    function cloneNote(){
        props.createNote({title: note.title, content: note.content, tags: note.tags})
        alert('Note Cloned.');
    }

    if (note === undefined) {
        return <h1>No note by that ID</h1>
    }
    return (
        <div className='display-note'>
            <header className='note-header'>
                <div className='note-links-container'>
                    <Link className='note-link' to={`${note.id}/edit`}>Edit</Link>
                    <Link className='note-link' to={`${note.id}/delete`}>Delete</Link>
                    <button onClick={cloneNote}>Clone</button>
                </div>
                <div className='note-title'>{note.title}</div>
                <div className='note-break'/>
                <div className='note-tags'>{note.tags}</div>
            </header>
            <div className='note-break'/>
            <div className='note-body'>{note.content}</div>
        </div>
    )
}

export default DisplayNote;