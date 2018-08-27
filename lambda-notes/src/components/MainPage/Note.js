import React from 'react';
import styled from 'styled-components';

const NoteList = styled.div`
`

const NoteContainer = styled.div`
margin 20px;
display: flex;
border: 1px solid black;
background-color: white;
width: 20%;
height: 20%;
`

const Note = props => {
    return (
        <NoteContainer>
            <div className='headline'>Note Title</div>
            <br />
            <div className='content'>
                <p> here's some sample content</p>
            </div>
        </NoteContainer>
    )
}

export default Note;