import React from 'react';

const NoteCard = props => {
    return(
        <div className="note-card">
            <h3>{props.title}</h3>
            <p></p>
            <p>{props.textBody}</p>
        </div>
    );
}

export default NoteCard;