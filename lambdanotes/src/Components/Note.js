import React from 'react';
import styled from 'styled-components';

const NoteBody = styled.div`
    width: 200px;
    border: 1px solid #BABABA;
    background white;
    height: 200px;
`;

const Note = props => {
    return ( 
        <NoteBody>
            <span>{props.note.title}</span>
            <span>{props.note.content}</span>
        </NoteBody>
     );
}
 
export default Note;