import React from 'react';
import { Link } from "react-router-dom";

import './Notes.css'


const searchingFor = term => {
    return function (x) {
        return x.text.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}


const Notes = props => {
    return (
        <div className="notes-page">
          <h2 className="page-title">Your Notes:</h2>
          <div className= "search">
          <input onChange={props.searchHandler} type="text" name="search" placeholder="search" value={props.term} />
          </div>
        
             <div className="notes">
            {props.notes.filter(searchingFor(props.term)).map(note => (
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