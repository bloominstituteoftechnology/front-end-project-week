import React from 'react';

const Note = props => {
    console.log(props);
    return (
        <div>
            <h2>{props.note.title}</h2>
            <p>({props.note.textBody})</p>
            <button onClick={() => props.deleteNote(props.note._id)}>Delete Note</button>
        </div>
    )

}

export default Note;