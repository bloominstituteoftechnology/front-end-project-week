import React from 'react';




const NoteCard = props=>{

    

        return(
            <div>
                <div className='notes'>
                <h2>{props.note.title}</h2>
                <p>{props.note.textBody}</p>
               
                </div>
                
            </div>
        )
    }


export default NoteCard;
