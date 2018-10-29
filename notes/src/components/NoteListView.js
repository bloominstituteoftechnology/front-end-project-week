import React from 'react';
import './NoteDisplay.css';

const NoteListView = (props) => {
    return (
        <div className='notesAll'>
            <h2>Your Notes:</h2>
        <div className='notesContainer'>
            {props.noteContent.map(note => {
                return (
                    <div className='singleNote' key={note._id}>
                        <h3>{note.title}</h3>
                        <p>{note.textBody}</p>
                    </div>
                );
            })}
        </div>
    </div>
    );
}

export default NoteListView;