import React from 'react';

const NoteComponent = (props) => {
    return (
        <div key= {props.note.id}>
            <div className = "note-component">
                <div className = "note-header">
                    <h4>{props.note.Title}</h4>
                </div>
                <p>{props.note.noteText}</p>
            </div>
        </div>
    )
}

export default NoteComponent;