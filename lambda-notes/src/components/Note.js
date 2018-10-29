import React from 'react';

const Note = props => {
    return (
        <div className="note">
            <h3>{props.newNote.title}</h3>
            <p>{props.newContent.textBody}</p>
        </div>
    );
}

export default Note;