import React from 'react';
import Note from './Note'

const NoteList = props => {
    return (
        <ul className='note-list'>
        {props.notes.map(note => 
        <Note 
            key={note.id} 
            note={note}
        />
        )
        }
        </ul>
    )
} 

export default NoteList; 