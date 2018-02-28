import React from 'react';
import Note from './Note';


const NoteContainer = (props) => {
    return(
    <div className='Note-container'>
        <h3>My notes</h3>
        <ul className='Note-list'>
        { props.notes.map((note) => {
            return (
            <Note key={note.title} title={note.title} content={note.content} />
            );
        })
        }
        </ul>  
    </div>    
    )
}
export default NoteContainer;