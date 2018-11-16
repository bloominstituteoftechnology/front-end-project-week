import React from 'react';
import {Redirect} from 'react-router';

import './notes.css';

const DisplayNote = props => {
    const buttonClicked = e => {
        e.preventDefault();
        if (e.target.name === 'edit') {
            // Change path to /note/edit
            return <Redirect to='/note/edit' />
        }
        else {
            // change this to show a delete yes/no modal
            props.deleteNote(note._id);
        }
    }

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
                    <button name='edit' className='edit-note-button' onClick={buttonClicked}>Edit</button>
                    <button name='delete' className='delete-note-button' onClick={buttonClicked}>Delete</button>
                </form>
            </header>
            <div className='note-break'/>
            <div className='note-body'>{note.textBody}</div>
        </div>
    )
}

export default DisplayNote;