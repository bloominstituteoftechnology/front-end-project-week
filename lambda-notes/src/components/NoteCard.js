import React from 'react';

const NoteCard = props => {

    return (
        <div>
            <h1>{props.singleNote.title}</h1>
            <p>{props.singleNote.textBody}</p>
        </div>
    )
}

export default NoteCard;