import React from 'react';
import axios from 'axios';
import '../styles/ViewNote.css';


const ViewNote = props => {
    
        return (
            <div> 
            <div className="Viewnote">
            <h3>{props.note.title}</h3>
            <p>{props.note.body}</p>    
            </div>
            </div>
        )
    }



export default ViewNote;