import React from 'react';


export const Note = props => {
    return (
        <div>
            <h3>{props.note.title}</h3>
            <p>{props.note.textBody}</p>
            <div className="button notebody" onClick={() => props.expungeNote(props.note._id)}>Delete Me</div>
        </div>
    )
}