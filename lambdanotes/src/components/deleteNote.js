import React from 'react';
import { Link } from "react-router-dom";
import './DeleteNote.css';



function DeleteNote(props){
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
                <h2>Are you certain?</h2>
                <div className="yesno">
                <button className="yes" onClick={() => props.handleDeleteNote(note._id)}>
                <span>yes</span>
                </button>
                <Link to ={`/notes/${note._id}`}>
                <button className="no">
                <span>no</span>
                </button>
                </Link>
                </div>
    </div>
      );
    }
  
  export default DeleteNote;