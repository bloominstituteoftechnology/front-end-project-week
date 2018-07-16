import React from 'react';
import Note from './Note';

const NoteView = props => {
    return (
        <div className="NoteView-container">
            <div className="NoteView-header">
                <h3>{props.note.title}</h3>
            </div>
            <div className="NoteView-note">
                <p>{props.note.textBody}</p>
            </div>
        </div>
    );

};

export default NoteView;