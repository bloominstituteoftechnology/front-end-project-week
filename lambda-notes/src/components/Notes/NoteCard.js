import React from 'react';

const NoteCard = props => {
    console.log(props.note.textBody);
    return (
        <div className="note-card">{props.note.textBody}</div>
    )
}

export default NoteCard;