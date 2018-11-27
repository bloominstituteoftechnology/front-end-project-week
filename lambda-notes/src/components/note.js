import React from 'react';
import { NoteContainer } from './styled-components';
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';


const Note = props =>{
    return(
        <NoteContainer>
            <Link to={`/note/${props.note._id}`}>
            <div className='header'>
                <h1>{props.note.title}</h1>
            </div>
            <div className='divider'></div>
             <div className='body'>
                 <Markup content={props.note.textBody}/>
             </div>
            </Link>
        </NoteContainer>
    )
}
export default Note;