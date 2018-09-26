import React from 'react';
import Note from './Note';
import './Notes.css';

const Notes = (props) => {
    return(
        <div className="all-notes">
            <h2>Your Notes:</h2>
            {props.notes.map(note => {
                return(
                <Note 
                noteTitle ={note.title}
                noteBody={note.textBody}
                id = {note._id} 
                key = {note._id}
                />
                )
            })}
        </div>
    )
}

export default Notes;