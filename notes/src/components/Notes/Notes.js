import React from 'react';
import Note from '../Note/Note';
import './Notes.css'

const Notes = props => {
    return (
        <div className="notes">
            {props.notes.map((note, index) => {
                return <Note key={index} title={note.title} content={note.textBody} />
            })}
        </div>
    )
}

export default Notes;