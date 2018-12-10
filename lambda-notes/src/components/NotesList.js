import React from 'react';

const NotesList = (props) => {
    console.log(props)
    return(
        <div className='notes-wrapper'>
            {props.notes.map(note => 
                <div className='notes-content'>
                <div className='notes'>
                    <h3>{note.title}</h3>
                    <p>{note.textBody}</p>
                </div>
                </div>
                )}
        </div>
    );
};

export default NotesList