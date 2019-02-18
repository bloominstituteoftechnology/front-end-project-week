import React from 'react';

const NoteCard = props => {

    return(
        <div className="note-card">
            

            <h2 className="note-title">
                {props.title}
            </h2>
            <div className="note-textBody">
                {props.textBody}
            </div>
            
            
        </div>
    )
        
}

export default NoteCard;
