import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Note from './note';

const NotesListAttrib = styled.div`
    width: 75%;
    margin-right: 10px;
    background: #F2F1F2;
    height: 100vh;
`

const NotesList = (props) => {
    console.log(props.notes)
    return (  
        <NotesListAttrib>
            <Link to={`/${props.notes.id}`}>
                <h2>Your Notes:</h2>
                {props.notes.map(note => <Note title={note.title} note={note.note}/>)}
            </Link>
        </NotesListAttrib>
    );
}
 
export default NotesList;