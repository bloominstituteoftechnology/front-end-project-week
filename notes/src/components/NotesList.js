import React from 'react';

function NotesList(props) {
    return (
        <div className="notes-list-wrapper">
            {props.notesList.map(note => (
            <div className="notecard" key={note.id}>
                <h3
                onClick={() => props.history.push(`/notes/${note.id}`)}
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
