import React from 'react';

function NotesInfo(props) {
    return (
        <div>
            <h1>{props.note.title}</h1>
            <p>{props.note.textBody}</p>
        </div>
    )
};
 export default NotesInfo;