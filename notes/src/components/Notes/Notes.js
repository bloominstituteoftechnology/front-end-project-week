import React from 'react';

const Notes = props => {
    return (
        <div className="notes">
            {props.notes.map(note => {
                <Note title={note.title} content={note.content} />
            })}
        </div>
    )
}

export default Notes;