import React from 'react';

const Note = props => {
    if(props.note){
        return(
            <div className='note-container'>
                
    
                <h2>{props.note.title}</h2>
                <p>{props.note.textBody}</p>
            </div>
        )
    } else if (props.error){
        return <h1>No note found...</h1>
    } else {
        return <h1>Loading note...</h1>
    }
}

export default Note;