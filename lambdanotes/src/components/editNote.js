import React from 'react';
import { Link } from "react-router-dom";
import './SingleNote.css';


function EditNote(props) {
console.log(props.params);
    // const note = props.notes.find(
    //     note => note._id === parseInt(props.match.params.noteId, 10));

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
                <h2>props.notes}</h2>
                </div>
                <div className="cards">
                <p>props.note.textBody}</p>
         </div>
    </div>
    )
} 

export default EditNote