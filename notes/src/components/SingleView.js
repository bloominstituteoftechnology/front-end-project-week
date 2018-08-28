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
padding-left: 30px;
padding-right: 30px;
h2 {
    padding-top: 25px;
}
`;

const SingleView = (props) => {
    return ( 

        <StyledViewWrapper>
        <StyledNoteContainer>
        <h2>{props.notes[0].title}</h2>
        <p>{props.notes[0].body}</p>
        </StyledNoteContainer>
      </StyledViewWrapper>

     );
}
 
export default SingleView;