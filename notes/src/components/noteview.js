import React from 'react';

const NoteView = () => {
    return(
        <div> 
        {props.noteList.map((notes, i) => {
            return (
                <div>
                {note = notes.filter(() => notes._id === path)}
                {console.log(note)}
                <div key={i}>
                <div>{note.tags}</div>
                <div>{note.title}</div>
                <div>{note.textBody}</div>
                </div>
                </div>
            )
        })}
    )
    </div>
    )
}

export default NoteView