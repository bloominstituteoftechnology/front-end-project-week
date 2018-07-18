import React from 'react';

const NoteView = props => {
    const { title, textBody, tags } = props.note;
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