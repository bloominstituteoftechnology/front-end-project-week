import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import DeleteModal from './DeleteModal';

const SingleNote = (props) => {
  const note = props.notes.find(
    (note) => note.id.toString() === props.match.params.noteId
  );
  // console.log('single note', note);

  if (!note) return <div />;
  // console.log('SingleNote', props.notes);
  return (
    <Container>
      <Title>{note.title}</Title>
      <Content>{note.textBody}</Content>
      <EditLink to={`/note/${note.id}/edit`}>edit</EditLink>
      <DeleteButton onClick={props.handleModalVisible}>delete</DeleteButton>
      <DeleteModal {...props} note={note} />
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

const StyledButton = styled.button`
  text-decoration: none;
  border: none;
  background: transparent;
  text-decoration: underline;
  width: 50px;
  position: absolute;
  font-size: 0.8rem;
  text-align: center;
`;

const DeleteButton = styled(StyledButton)`
  right: 100px;
  top: 30px;
`;

const EditLink = styled(Link)`
  position: absolute;
  color: black;
  right: 160px;
  width: 50px;
  font-size: 1rem;
  text-align: center;
  top: 30px;
`;
