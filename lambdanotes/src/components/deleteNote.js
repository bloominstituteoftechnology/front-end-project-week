import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './DeleteNote.css';



function DeleteNote(props){
    // console.log(props.);
    
    const note = props.notes.find(
        note => note._id === props.match.params.noteId);

    const handleDeleteNote = (noteId, history) => {
    
        axios
        .delete(`https://killer-notes.herokuapp.com/note/delete/${noteId}`)
        .then(response => history.push('/notes')
        )
        };
    

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
                    <button className="yes" onClick={() => handleDeleteNote(note._id, props.history)}>
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