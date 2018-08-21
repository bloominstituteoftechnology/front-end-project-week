import React from 'react';


const Notes = (props) => {
    return (
        <div className="notes-page">
             <h2>Your Notes:</h2>
             <div className="notes">
             {props.notes.map(note =>
             <div className="text">
             <h3>{note.title}</h3>
             <p>{note.text}</p>
             </div>
            )}
             </div>
            </div>
    )
}



export default Notes;