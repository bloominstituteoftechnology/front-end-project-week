import React from 'react';
import { Link } from "react-router-dom";
// import './DeleteNote.css';



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
            <Link to ="/deletecard">
                <button className="delete">
                <span>delete23</span>
                </button>
            </Link>
                </div>
                <div className="statement">
                {/* <h2>{note.title}</h2>
                </div>
                <div className="cards">
                <p>{note.textBody}</p> */}
                <h1>Are You Sure You Want To Delete This Card?</h1>
         </div>
    </div>
      );
    }
  
  export default DeleteNote;