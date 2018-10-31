import React from 'react';

import './Notes.css';



const NoteCard = props=>{

    

        return(
            <div className='note-card'>
                <div className='notes'>
                <h2>{props.note.title}</h2>
                <p>{props.note.textBody}</p>
               
                </div>
                
            </div>
        )
    }


export default NoteCard;
