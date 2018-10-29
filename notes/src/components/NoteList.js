import React from 'react';
import Note from './Note';

const NoteList = ({ notes, noteClicked }) => {
    if (!notes.length) return <h2>Loading Notes ...</h2>;
    return (
        <div>
            <h2>Your Notes</h2>
            <div className={'note-list'}>
                {notes.map(note => <Note note={note} key={note.id} noteClicked={noteClicked}/>)}
            </div>
        </div>
    );
}

export default NoteList;
