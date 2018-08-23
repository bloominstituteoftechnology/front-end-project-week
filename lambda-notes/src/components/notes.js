import React from 'react';
import { Link } from "react-router-dom";

import './Notes.css'


const Notes = props => {
    return (
        <div className="notes-page">
          <h2 className="page-title">Your Notes:</h2>
        
             <div className="notes">
            {props.notes.map(note => (
            <Link to={`/notes/${note.id}`}>
            <div className="text">
             <h3>{note.title}</h3>
             <p>{note.text}</p>
           
            </div>
            </Link> 
            ))}
            </div>
        
            </div>
         )
      }



export default Notes;