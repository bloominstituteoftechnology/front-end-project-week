import React from 'react';
import Note from './Note';
import {Link} from 'react-router-dom';

export default function NotesList (props) {
    return(
        props.notes.map(note => ( 
            <Link to={`note/${note.id}`}>
            <Note 
                notes={props.notes}
                key={note.id}
                id={note.id} 
                note={note}    
            /></Link>))
    )
}