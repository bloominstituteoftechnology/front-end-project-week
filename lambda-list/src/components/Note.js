import React from 'react';
import '../App.css';



const Note = props => {
    return (
        <div className="note">
            <div className="note-title">
                <h4>{props.title}</h4>
            </div>
            <div className="note-body">
                <p>{props.textBody}</p>
            </div>  
                
        </div>
        
    )
}

export default Note;