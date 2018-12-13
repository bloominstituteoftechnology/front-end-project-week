import React from "react";
import Note from '../Components/Note';
import styled from "styled-components";
import { Fragment } from 'react';

const ListView = props => {

    const SmallNoteContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `;
    const HeaderMessage = styled.div`
    height: 100px;
    // border: 1px solid red;
    margin: 0px 10px;
    padding: 40px 0;
    font-size: 4rem;
    font-weight: bold;
    `;
    return (
        <>
        <HeaderMessage>Your Notes, good sir!:</HeaderMessage>
        <SmallNoteContainer >
        

        {props.notes.map((note) => 
        <Note  {...props} key={note._id} note={note}  /> )}
        </SmallNoteContainer>
        </>
    )

    
}



export default ListView;