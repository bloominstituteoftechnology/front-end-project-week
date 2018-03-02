import React from 'react';
import Note from './Note';
import { Link } from 'react-router-dom';



const NoteContainer = (props) => {
    return(
    <div className='Note-container'>
        <h3>My notes</h3>
        <ul className='Note-list'>
        { props.notes.map((note) => {
            return (
                <Link to={`/${note.id}`}><Note key={note.id} title={note.title} content={note.content} /></Link>
            );
        })
        }
        </ul>  
    </div>    
    )
}
export default NoteContainer;