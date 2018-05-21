import React from 'react';

const NotesContainer = (props) => {
    return (
        <div key={props.note.id}>
            <div className = "note-container">
                <div className="note-header"> 
                    <h4>{props.note.noteTitle}</h4>
                    <hr/>
                </div>
                
                <p>{props.note.noteText}</p>
            </div>
        </div>
    )
}

export default NotesContainer;