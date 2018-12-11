import React from "react";

import "./Note.css"

const Note = props => {
    const note = props.notes.find(note => note._id.toString() === props.match.params.id);

    if (!note) {
        return <h2>Sorry, the note is currently unavailable!</h2>
    }
    return (
        <div className="note-container">
            <div className="button-menu">
                <i class="fas fa-trash-alt"></i>
                <i class="fas fa-edit"></i>
            </div>
            <h2 className="title">{note.title}</h2>
            <p>{note.textBody}</p>
        </div>
    )
}

export default Note;