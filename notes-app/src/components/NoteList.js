import React from 'react';
import Note from './Note';

function NoteList(props) {
    return (
        <div className="notelistcontainer-div">
            <h1 className="notelist-header">Your Notes</h1>
            <div className="noteslist-div">
            {props.notes.map((note, index) => (
                <Note key={index} note={note} />
            ))}
            </div>
        </div>
    )
}

export default NoteList;