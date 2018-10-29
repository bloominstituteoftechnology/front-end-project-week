import React from 'react';




const Note = props=>{

        return(
            <div>
                <div className='notes'>
                <h2>{props.note.title}</h2>
                <p>{props.note.textBody}</p>
                </div>
                
            </div>
        )
    }


export default Note;
