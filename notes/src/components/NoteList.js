import React from 'react';
import NoteCard from './NoteCard'

const NoteList = (props) => {
    return(
        <div className="note-list">
            {props.notes.map(note => {
                return (<NoteCard id={note._id} key={note._id} title={note.title} textBody={note.textBody} />)
            })}
        </div>
    );
}

export default NoteList;