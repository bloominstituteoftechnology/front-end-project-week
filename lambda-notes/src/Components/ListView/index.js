import React from 'react';

export const NoteList = props => {
    return (
        <div>
            {props.Notes.map(note => {
                return <div>{note.title}, {note.body}</div>
            })}
        </div>
    )
}