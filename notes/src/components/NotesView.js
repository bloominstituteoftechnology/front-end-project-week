import React from 'react';
import styled from 'styled-components';

import Note from './Note'

const StyledNoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledViewWrapper = styled.div`
display: flex;
flex-direction: column;
`;

const NotesView = (props) => {
    return ( 

        <StyledViewWrapper>
        <h2>Your Notes:</h2>
        <StyledNoteContainer>
          {props.notes.map(note => (
            <Note title={note.title} body={note.body} tags={note.tags} />
          ))}
        </StyledNoteContainer>
      </StyledViewWrapper>

     );
}
 
export default NotesView;