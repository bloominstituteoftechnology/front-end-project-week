import React from 'react';
import styled from 'styled-components';

const SingleNote = (props) => {
  // console.log(props);
  const note = props.notes.find(
    (note) => note._id === props.match.params.noteId
  );
  // console.log(note);

  if (!note) return <div />;

  return (
    <Container>
      <Title>{note.title}</Title>
      <Content>{note.textBody}</Content>
    </Container>
  );
};

export default SingleNote;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Content = styled.p`
  margin: 30px 0;
  font-size: 1.2rem;
  line-height: 2rem;
  hyphens: auto;
`;
