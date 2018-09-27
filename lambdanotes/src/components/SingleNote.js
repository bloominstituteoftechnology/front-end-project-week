import React from 'react';
import { Link } from "react-router-dom";
import './SingleNote.css';



function SingleNote(props){
    console.log(props.history);
    
    const note = props.notes.find(
        note => note._id === parseInt(props.match.params.noteId, 10));
    

    return (
    <div className="cards-container">
        <div className="links">
            <Link to ="/editcard">
                <button className="edit">
                <span>edit</span>
                </button>
            </Link>
            <Link to ="/deletecard">
                <button className="delete">
                <span>delete</span>
                </button>
            </Link>
                </div>
                <div className="statement">
                <h2>note.title}</h2>
                </div>
                <div className="cards">
                <p>note.textBody}</p>
         </div>
    </div>
      );
    }
  
  export default SingleNote;