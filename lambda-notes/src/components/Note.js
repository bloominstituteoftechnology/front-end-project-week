import React from 'react';
import { Link } from 'react-router-dom';

import './Note.css';

const Note = props => {
    console.log(props);
    return (
        <div className="note">
            <h2 className="note-title">{props.note.title}</h2>
            <p className="note-textBody">({props.note.textBody})</p>
            {/* <button onClick={() => props.deleteNote(props.note._id)}>Delete Note</button>
            <Link to='/notes/${:note._id}/update' >Update Note</Link> */}
        </div>
    )

}

export default Note;