import React from 'react';

const NoteView = props => {
    return (
        <div className="NoteView-container">
            <div className="NoteView-header">
                <h3>Note Title</h3>
            </div>
            <div className="NoteView-note">
                <p>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ec purus a, efficitur mollis ...</p>
            </div>
        </div>
    );

};

export default NoteView;