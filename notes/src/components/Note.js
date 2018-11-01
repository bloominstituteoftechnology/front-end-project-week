import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
   h2 {
    margin: 20px 0;
    font-weight: bold;
    font-size: 3rem;
  }
  p {
    font-size: 1.6rem;
    line-height: 25px;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Note = props => {
  return (
    <Container>
      <Section>
        <Link to={`/edit/${props.note._id}`}>
          <button type="button">Edit</button>
        </Link>
        
        <button type="button" onClick={props.showModal}>Delete</button>
      </Section>

      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
    </Container>
  );
}

export default Note;
