import React from 'react';

import './Notes.css';



const NoteCard = props => {



    return (
        <div className='note-card'>
            <div className='notes'>
                <h2>{props.note.title.substring(0,33)}</h2>
                <p>{props.note.textBody}</p>

            </div>

        </div>
    )
}


export default NoteCard;
