import React from 'react';
import { NoteContainer } from './styled-components';
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';


const Note = props =>{
    return(
        <NoteContainer>
            <Link to={`/note/${props.note._id}`}>
            <h1>{props.note.title}</h1>
             <Markup content={props.note.textBody}/>
            </Link>
        </NoteContainer>
    )
}
export default Note;