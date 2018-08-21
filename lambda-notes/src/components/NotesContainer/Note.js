import React from 'react';
import styled from 'styled-components';

const Notes = styled.div`
width: 200px;
height: 30%;
padding: 0 12px;
border: 1px solid black;
`

const NoteName = styled.h2`

`

const NoteText = styled.p`

`

const Note = () => {
    return ( <Notes>
        
        <NoteName>Note Title</NoteName>
        <hr />
        <NoteText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</NoteText>
        
        
        </Notes> );
}
 
export default Note;