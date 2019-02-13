import React from 'react';

import Note from './note.js';


//props from notesView.js
//notes={props.notes}

const NotesIterator = props => {
    console.log("props from notesIterator", props)
    return (
        <div className="noteBox">
            {props.notes.map( note => {
                return <Note key={note._id} title={note.title} body={note.textBody} id={note._id} />
            })}
        </div>
    )
}

export default NotesIterator