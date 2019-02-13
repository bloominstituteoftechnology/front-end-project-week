import React from 'react';
import Note from './Note';

const NotesList = props => {
    return(
        <div className="notes-container">
            <h2>Your notes</h2>
            <div className="notes-wrapper">
                {props.notes.map((note, index) => {
                    return (
                        <Note key={index} note={note} tags={note.tags}/>
                    )
                })}
            </div>
        </div>
    )
}

export default NotesList;