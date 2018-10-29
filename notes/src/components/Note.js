import React from "react";


const Note = ({note}) => {
    const { title, textBody } = note
    return (
        <div className="note-card">
            <div className="note-title">{title}</div>
            <div className="note-body">{textBody}</div>
        </div>
    )
}

export default Note;