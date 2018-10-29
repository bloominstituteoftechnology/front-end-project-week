import React from 'react';
import Note from './Note'

const NotesList = props => {
    return (
        <div className="notes-list">
            {props.notes.map(note => {
                return <Note newNote={note} newContent={note} />
            })}
        </div>
    );
}

export default NotesList;