import React from "react";
import styled from 'styled-components';

const StyledNote = styled.div`
  h2{ 
    color: #414141;
    padding: 20px 0;
  }
`

const Note = ({ note }) => (
  <div>
    {note ? (
      <StyledNote>
        <h2>{note.title}</h2>
        <p>{note.textBody}</p>
      </StyledNote>
    ) : (
      <p> loading note...</p>
    )}
  </div>
);

export default Note;
