import React from "react";
import Note from '../Components/Note';
import styled from "styled-components";


const ListView = props => {

    const SmallNoteContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `;
    return (
    <SmallNoteContainer >
    {props.notes.map((note) => 
    <Note  {...props} key={note._id} note={note}  /> )}
    </SmallNoteContainer>
    )

    
}



export default ListView;