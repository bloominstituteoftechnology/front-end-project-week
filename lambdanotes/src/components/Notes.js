import React from 'react';
import '../styles/App.css';
import NoteView from './NoteView';

function Notes(props) {
    console.log(props);
        return (
            props.notes.map(note => {
              return <NoteView key={note.id} note={note}/> 
            })
        )
}
export default Notes;