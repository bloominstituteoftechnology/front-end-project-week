import React from 'react';

import { Container, Wrapper } from './Styles'

const NotesList = props => {
  const { notes } = props;
  return (
    <Container>
      <Wrapper>
        {notes.map(note => <p>{note.title}</p>)}
      </Wrapper>
    </Container>
  );
}

export default NotesList;
