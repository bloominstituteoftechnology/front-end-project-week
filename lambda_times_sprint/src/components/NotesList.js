import React from 'react';

function NotesList(props) {
    if (!props.notesList || !props.notesList.length) {
        return <h1>No notes found. Fetching data...</h1>
    }
    return (
        <div className="notes-list-wrapper">
            {props.notesList.map(note => (
            <div className="note-card" key={note.id}>
                
                <h3
                onClick={() => props.history.push(`/notes/${note.id}/info`)}
                >
                {note.title}
                </h3>
                <p>({note.textBody})</p>
            </div>
            ))}
        </div>
    );
}

export default NotesList;