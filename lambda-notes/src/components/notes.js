import React from 'react';
import { Link } from "react-router-dom";
import './notes.css'


const Notes = (props) => {
    return (
        <div className="notes-page">
             <h2 className="page-title">Your Notes:</h2>
             {/* <Link to={`/notes/${note.id}`}> */}
             <div className="notes">
            {props.notes.map(note => (
            <div className="text">
          
             <h3>{note.title}</h3>
             <p>{note.text}</p>
            </div>
            ))}
            </div>
             {/* </Link> */}
            </div>
    )
}



export default Notes;