import React from 'react'
import NoteView from '../NoteView/NoteView'
import styled from 'styled-components'
import DeleteView from './DeleteView'
const ContentDiv = styled.div`
    Width: 100%;
    display: flex;
    background-color: #F3F3F3;
    font-family: 'Open Sans', sans-serif;
    min-height: 100vh;
`;


const DeleteNote = (props) =>{
    return (
        <ContentDiv>
            <DeleteView deleteNote = {props.deleteNote} id = {props.match.params.id}/>
            <NoteView {...props}/>
        </ContentDiv>
        )
}

export default DeleteNote