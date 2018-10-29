import React from 'react';
import NoteCard from './NoteCard'

const NoteList = (props) => {
    return(
        <div className="note-list">
            <h2>Notes : </h2>
            {props.notes.map(note => {
                return (<NoteCard title={note.title} textBody={note.textBody} />)
            })}
        </div>
    );
}

export default NoteList;