import React from 'react';
import { Link } from "react-router-dom";
import './SingleNote.css';



function SingleNote(props){
    // console.log(props.);
    
    const note = props.notes.find(
        note => note._id === props.match.params.noteId);
    

    return (
    <div className="cards-container">
        <div className="links">
            <Link to ={`/notes/${note._id}/edit`}>
                <button className="edit">
                    <span>edit</span>
                </button>
            </Link>
            <Link to ={`/notes/${note._id}/delete`}>
                <button className="delete">
                    <span>delete</span>
                </button>
            </Link>
                </div>
                <div className="statement">
                    <h2>{note.title}</h2>
                </div>
                <div className="cards">
                    <p>{note.textBody}</p>
                </div>
         </div>
        );
    }
  
  export default SingleNote;