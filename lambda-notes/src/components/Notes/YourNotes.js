import React from 'react';
import NoteCard from './NoteCard';

const YourNotes = props => {
    console.log(props.notes);
    return (
        <div className="your-notes">
            <h2 className="your-notes-header">Your Notes</h2>
            {props.notes.map((note) => <NoteCard key={note._id} note={note} />)}
        </div>
    );
}

export default YourNotes;