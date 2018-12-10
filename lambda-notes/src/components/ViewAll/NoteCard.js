import React from 'react';
import '../../App.css';

const NoteCard = props => {
    return (
        <div className ='card'>
            
                <h3 className = 'noteCardTitle'> {props.title} </h3>
                <p>{props.content}</p>
            

            
        </div>
    )
}

export default NoteCard;