import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle} from 'reactstrap';

import Note from './note';

const NoteTextContainer = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const NoteListText = styled.h4`
    color: #414141;
    text-align: left;
    margin: 30px 5%;
`
const NoteListMessage = styled.h4`
    color: #414141;
`

const NotesListAttrib = styled.div`
    width: 75%;
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
    border-radius: 2px;
    background: white;
    box-shadow: 3px 3px 5px darkslategray;
`

const Line = styled.hr`
    width: 80%;
`

const NoteTitle = styled.h3`
    text-decoration: none;
    color: black;
`

const NoteContent = styled.p`
    text-decoration: none;
    color: black;
`

const NotesList = (props) => {
    return (  
        <NotesListAttrib>
            <NoteListText>Your Notes:</NoteListText>   
            {props.notes.length === 0 ? 
                <NoteTextContainer>
                    <NoteListMessage>No notes are available...</NoteListMessage>  
                    <NoteListMessage>Please create a new note.</NoteListMessage>
                </NoteTextContainer>
                 
                :
                <NoteCartContainer>
                    {props.notes.map(note => <Link to={`/note/${note.id}`} key={note.id}>
                        <NoteCard key={note.id}>
                            <NoteTitle>{note.title}</NoteTitle>
                            <Line/>
                            <NoteContent>{note.note}</NoteContent>
                        </NoteCard>
                    </Link>)}
                </NoteCartContainer>  
            }                               
        </NotesListAttrib>
    );
}
 
export default NotesList;