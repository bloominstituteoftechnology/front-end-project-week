import React from 'react';
import styled from 'styled-components';


const PreviewContainer = styled.div`
display:flex;
flex-flow: column wrap;
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
            {props.note.textBody.length >=75 
                ? props.note.textBody.substring(0,75)+'...' 
                : props.note.textBody}
        </NoteBody> 
    </PreviewContainer>
  )
}

export default NotePreview;