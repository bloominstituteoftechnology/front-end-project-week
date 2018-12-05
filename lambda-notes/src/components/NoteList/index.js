import React from "react";
import { Link } from "react-router-dom";

const NoteList = props => {
    if (!props.notes) {
    return (
        <div>Loading notes...</div>
        )
    }

    const notes = props.notes;

    return (
        <div className="your-notes-container">
            <h2>Your Notes:</h2>
            <div className="notes-previews-container">
                {notes.map(note => {
                    return(
                        <Link to={`/notes/${note._id}`} key={ note._id }>
                            <div className="note-preview-container">
                                <h3>{note.title}</h3>
                                <p>{note.textBody}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default NoteList;