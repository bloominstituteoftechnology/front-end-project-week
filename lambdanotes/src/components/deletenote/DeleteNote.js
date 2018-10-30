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
        .then(response => history.push('/notes')
        )
    };
    

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
            <div className="cards">
                <p>{note.description}</p>
            </div>
                <h2>Are you certain?</h2>
            <div className="yesno">
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
      );
    }
  
  export default DeleteNote;