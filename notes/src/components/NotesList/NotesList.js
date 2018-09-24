import React from 'react';
import './NoteList.css';

function NotesList(props) {
    if(!props.notesList || !props.notesList.length) {
        return <h1>Make Your First Note!</h1>
    }

    return (
        <div className='note-container'>
            {props.notesList.map(note => (
                <div key={note.title} className='note'>
                    <h2>{note.title}</h2>
                    <p>{note.text}</p>
                </div>
            ))}
        </div>
    );
}

export default NotesList;