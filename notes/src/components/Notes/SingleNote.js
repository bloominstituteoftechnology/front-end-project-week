import React from 'react';
import styled from 'styled-components';

const SingleNote = (props) => {
  console.log(props);
  const note = props.notes.find(
    (note) => note._id === props.match.params.noteId
  );
  console.log(note);

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
  margin: 10px 0;
  font-size: 1.2rem;
`;

const Content = styled.p`
  margin: 10px 0;
  font-size: 1rem;
`;
