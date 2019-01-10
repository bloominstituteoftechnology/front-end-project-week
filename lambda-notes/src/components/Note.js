import React from 'react';
import './styles/Note.css';

// TODO - Make sure to remove the sample text from the p tag below.
const Note = () => {
    return (
        <div className="NoteMain">
            <h1 className="NoteTitle">Note Title</h1>
            <p className="NoteText">Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis</p>
        </div>
    )
}

export default Note;