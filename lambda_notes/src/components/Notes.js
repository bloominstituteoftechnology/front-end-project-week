import React from 'react';


function Note({note, deleteItem, updateItem}) {
    return (
        <div className="note-wrapper">
            <div className="notes">
            <button onClick={event => { updateItem(event, note);}} className="update-button" >
                    Edit
                </button>
            <button onClick={event => { deleteItem(event, note.id)}} className="delete-button" >
                Delete
            </button>
            <h2 className="note-title">
                    <p>{note.title}</p>
                </h2>
                <h2 className="note-text">
                    <p>{note.text}</p>
                </h2>
                
            </div>
        </div>
    );
}

export default Note; 