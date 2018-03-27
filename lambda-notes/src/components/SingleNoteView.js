import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledNote = styled.div`

`;

const SingleNoteView = props => (
    <Link to={`/single-note-view/${props.note.id}`}>
      <StyledNote>
      </StyledNote>
    </Link>
  );

  export default SingleNoteView