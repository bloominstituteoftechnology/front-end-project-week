import React from 'react';
import Note from './Note';

const NoteView = props => {
    const { title, textBody } = props.note;
    return (
        <div className="NoteView-container">
            <div className="NoteView-header">
                <h3>{title}</h3>
            </div>
            <div className="NoteView-note">
                <p>{textBody}</p>
            </div>
        </div>
    );

};

export default NoteView;