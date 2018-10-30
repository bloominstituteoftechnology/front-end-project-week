import React from 'react';
import { Link } from "react-router-dom";
import './SingleNote.css';



function SingleNote(props){
    console.log(props.notes);
    
    const note = props.notes.find(
        note => note.id == props.match.params.noteId);
        
        console.log(note);

    return (
    <div className="cards-container">
        <div className="links">
            <Link to ={`/notes/${note.id}/edit`}>
                <button className="edit">
                    <span>edit</span>
                </button>
            </Link>
            <Link to ={`/notes/${note.id}/delete`}>
                <button className="delete">
                    <span>delete</span>
                </button>
            </Link>
                </div>
                <div className="statement">
                    <h2>{note.name}</h2>
                </div>
                <hr/>
                <div className="cards">
                    <p>{note.description}</p>
                </div>
         </div>
        );
    }
  
  export default SingleNote;