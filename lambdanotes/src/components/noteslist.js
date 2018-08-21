import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle} from 'reactstrap';

import Note from './note';

const NotesListAttrib = styled.div`
    width: 75%;
    margin-right: 10px;
    background: #F2F1F2;
    height: 100vh;
`
const NoteCartContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

`

const NoteCard = styled.div`
    width: 200px;
    margin: 10px 5px;
    height: 200px;
    text-decoration: none;
    border: 1px solid black;
`

const Line = styled.hr`
    width: 80%;
`

const NoteTitle = styled.h3`
    text-decoration: none;
`

const NoteContent = styled.p`
    text-decoration: none;
`

const NotesList = (props) => {
    console.log(props)
    return (  
        <NotesListAttrib>
            <h2>Your Notes:</h2>   
            <NoteCartContainer>
                {props.notes.map(note => <Link to={`/${note.id}`}>
                    <NoteCard>
                        <NoteTitle>{note.title}</NoteTitle>
                        {console.log(note.title)}
                        <Line/>
                        <NoteContent>{note.note}</NoteContent>
                    </NoteCard>
                </Link>)}
            </NoteCartContainer>                     
        </NotesListAttrib>
    );
}
 
export default NotesList;