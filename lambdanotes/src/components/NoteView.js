import React from 'react';

const NoteView = props => {
    return (
        <div className= 'note-view-wrapper'>
            <h1>{props.notesData.title}</h1>
            <p>{props.notes.Data.textBody}</p>
        </div>
    )
}

export default NoteView;