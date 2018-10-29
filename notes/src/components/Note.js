import React from 'react';

const Note = ({ note, noteClicked }) => {
    return (
        <div className="note" onClick={noteClicked}>
            <div className="title">{note.title}</div>
            <div className="body">{note.textBody}</div>
        </div>
    );
}

export default Note;
