import React from 'react';
import './noteList.css';

const NoteList = props => {
    return (
        <div className="Note-Wrapper">
        <div className="Body-Title"><h4>Your Notes:</h4></div>
            {props.notes.map(note => (
                <div className="Note-Body" key={note.id}>
                    <h4>{`${note.title}`}</h4>
                    <p>{`${note.text}`}</p>
                </div>
            ))}
        </div>
    )
}

export default NoteList;