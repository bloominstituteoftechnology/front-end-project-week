import React from 'react'
import './ViewNote.css'; 

const ViewNote = props =>  {
    const note = props.notes.find(note => note.id === props.match.params.id);
        return(
            <div className="view-page">
            <h1>View Note</h1>
            <div>{note.title}</div>
            <p>{note.content}</p>
            </div>
        )
    }
export default ViewNote; 