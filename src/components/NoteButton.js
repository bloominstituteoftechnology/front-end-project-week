import React from 'react';

const NoteButton = (props) => {
    return (      
            <button 
                className={`btn ${props.color}`}>{props.value}
            </button>
        )    
} 
export default NoteButton;

