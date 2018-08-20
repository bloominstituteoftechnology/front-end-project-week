import React, {Fragment} from "react";
import styled from 'styled-components';

const StyledNote = styled.div`
  h4 {
    font-size: 17px;
    padding-bottom: 27px;
  }

  p {
    font-size: 12px;
  }

`

const Note = ({ note }) => (
  <div>
    {note ? (
      <StyledNote>
        <h4>{note.title}</h4>
        <p>{note.textBody}</p>
      </StyledNote>
    ) : (
      <p> loading note...</p>
    )}
  </div>
);

export default Note;
