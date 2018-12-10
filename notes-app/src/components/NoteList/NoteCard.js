import React from 'react';

const NoteCard = props => {
    let { title, textBody, } = props.note
    return (
        <div className="note-card">
            <h3>{title}</h3>
            <p>{textBody}</p>
        </div>
    )
}

export default NoteCard;