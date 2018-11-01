import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './DeleteNote.css';



function DeleteNote(props){
    // console.log(props.);
    
    const note = props.notes.find(
        note => note.id === parseInt(props.match.params.noteId, 10));

    const handleDeleteNote = (noteId, history) => {
    
        axios
        .delete(`http://localhost:9000/notes/${noteId}`)
        .then(response => window.location = "/notes")
    };
    

    return (
    <div>
         <div className="yesno">
            <div className="insideaction">
            <h2>Are you certain?</h2>
                <button className="yes" onClick={() => handleDeleteNote(note.id, props.history)}>
                    <span>yes</span>
                </button>
            <Link to ={`/notes/${note.id}`}>
                <button className="no">
                    <span>no</span>
                </button>
            </Link>
            </div>
            </div>
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
            <div>
                <h2>{note.name}</h2>
            </div>
            <hr/>
            <div>
                <p>{note.description}</p>
            </div>
        </div>
      );
    }
  
  export default DeleteNote;