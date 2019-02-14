import React from 'react';
import { Link } from 'react-router-dom';

function NoteList(props) {

    return (
        <div className="notelistcontainer-div">
            <h1 className="notelist-header">Your Notes</h1>
            <div className="noteslist-div">
            {props.notes.map((note, index) => (
                <div key={index} className="note-div">
                    <Link to={`/notes/${note._id}`} style={{textDecoration: 'none'}}>
                        <h1>{note.title}</h1>
                    </Link>
                    <p>{note.textBody}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default NoteList;