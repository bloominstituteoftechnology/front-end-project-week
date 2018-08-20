import React from 'react';
import '../CSS/notefocus.css';

const NoteFocus = (props) => {
    const note = props.notes.find(note => note.id == props.match.params.id)
    console.log(note);
    return (
        <div className="focus">
            <div className="edit-del">
                <p>edit</p>
                <p>delete</p>
            </div>
            <h1 className="focustitle">{note.title}</h1>
            <div className="notetxt">{note.text}</div>
        </div>
    )
}

export default NoteFocus;
