import React from "react";


const Notes = (props) => {
    return (
        <div className="notes-container">
            <h2 className="yournotes">Your Notes:</h2>
            <div className="notes">
            {props.notes.map(note =>               
                    <div className="note">
                        <div className="note-contents">
                            <p className="note-title">{note.title}</p>
                            <p>{note.text}</p>
                        </div> 
                    </div>)} 
            </div>
        </div>
    )
}

export default Notes;