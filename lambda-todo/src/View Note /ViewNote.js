import React from 'react'
import './ViewNote.css'; 

const ViewNote = props =>  {
    const viewNotes = props.viewNote.find(e => e.id === props.match.params.id);
        return(
            <div className="view-page">
            <h1>View Note</h1>
            <p>{viewNotes.content}</p>
            </div>
        )
    }
export default ViewNote; 