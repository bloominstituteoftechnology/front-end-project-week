import React from 'react';


const NoteCard = props => {
    return (
        <div>
            
                <h3 className = 'noteCardTitle'> {props.title} </h3>
                <p>{props.textBody}</p>
            

            
        </div>
    )
}

export default NoteCard;