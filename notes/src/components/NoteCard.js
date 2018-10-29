import React from 'react';

const NoteCard = props => {
    return(
        <div className="note-card">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.textBody}</p>
        </div>
    );
}

export default NoteCard;
