import React from 'react';

//props from notesIterator
//key={note._id} title={note.title} body={note.textBody} id={note._id}

const Note = props => {
    console.log("props from note", props)
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}

export default Note