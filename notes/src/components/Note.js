import React from 'react';

const Note = (props) => {
    console.log('Note()');
    console.log(props);
    return (
        <div className="note">
            <h2>{props.note.title}</h2>
            <p>{props.note.textBody}</p>
        </div>
    )
}

export default Note;