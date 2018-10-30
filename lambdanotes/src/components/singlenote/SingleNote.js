import React from 'react';
import { Link } from "react-router-dom";
import './SingleNote.css';



function SingleNote(props){
    console.log(props.notes);
    
    const note = props.notes.find(
        note => note.id === parseInt(props.match.params.noteId, 10));
        
        console.log(note);

    return (
    <div>
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
                    <h2 className="singletitle">{note.name}</h2>
                </div>
                <hr/>
                <div>
                    <p className="singledescrip">{note.description}</p>
                </div>
         </div>
        );
    }
  
  export default SingleNote;