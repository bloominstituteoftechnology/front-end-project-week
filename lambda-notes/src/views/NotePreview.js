import React from 'react';
import styled from 'styled-components';


const PreviewContainer = styled.div`
display:flex;
border : 1px solid #D3D2D3;
width: 250x;
height: 250px;
flex-flow: column;

`

const NoteTitle = styled.h3`
`

const NoteBody = styled.p`
`

const NotePreview = props => {
  return (
    <PreviewContainer>
        <NoteTitle>
            {props.note.title.length >= 15
                ? props.note.title.substring(0,15)+'...'
                : props.note.title}
        </NoteTitle>
        <NoteBody>
            {props.note.textBody.length >=15 
                ? props.note.textBody.substring(0,15)+'...' 
                : props.note.textBody}
        </NoteBody> 
    </PreviewContainer>
  )
}

export default NotePreview;