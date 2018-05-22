import React, { Component } from 'react';

import Note from './Note';

const NoteList = (props) => {
    return (
         <div>
            <div className='note-container'>
            <h2>Your Notes:</h2>
            <div>
            {props.notes.map(note => <Note key={note.id} note={note} />)}
            </div>
            </div>
        </div>
    )
    
}


export default NoteList;