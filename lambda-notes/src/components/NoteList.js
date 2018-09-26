import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NoteList = props => {
    console.log('notelist props:', props)
    return (
        <NoteListWrap>
            <H2>Your Notes:</H2>
            <NoteCardWrap>
                {props.notes.map(note => 
                    <NoteCard key={note.id}>
                        <NavLink to={`/note-view/${note.id}`}>
                            <H3>{note.title}</H3>
                            <P>{note.content} ...</P>
                        </NavLink>  
                    </NoteCard> 
                )}
            </NoteCardWrap>   
        </NoteListWrap>
    )
}

const NoteListWrap = styled.div`
    margin: 56px 0 0 3.5%;
`;

const H2 = styled.h2`
    font-size: 1.25rem;
`;

const NoteCardWrap = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
`;

const NoteCard = styled.div`
    border: 1px solid grey;
    margin: 10px 1.1%;
    width: 29.75%
    height: 195px;
`;

const H3 = styled.h3`
    margin: 11px 11% 0 8%;
    font-size: 1.2rem;
    border-bottom: 2px solid grey;
    padding-bottom: 4px;
    color:black;
    text-decoration: none;
`;

const P = styled.p`
    color:black;
    margin: 7px 0 0 8%;
    font-size: 0.9rem;
    width: 80%;
    line-height: 21px;
    text-decoration: none;
`;

export default NoteList;