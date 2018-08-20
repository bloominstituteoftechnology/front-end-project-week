import React from 'react';
import Note from './Note';

export default function NotesList (props) {
    return(
        props.notes.map(note => <Note 
                key={note.note} 
                note={note}    
            />)
    )
}