import React from 'react';
import '../styles/App.css';
import NoteView from './NoteView';

function Notes(props) {

    
        return (
            props.notes.map(note => {
              return <NoteView key={note.id} showNote={props.showNote} note={note}/> 
            })
        )
}
export default Notes;