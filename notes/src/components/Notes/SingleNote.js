import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleNote = (props) => {
  // console.log(props);
  const note = props.notes.find(
    (note) => note._id === props.match.params.noteId
  );
  // console.log(note);

  const handleDelete = () => {
    console.log('handleDelete');
    props.deleteData(note._id);
    props.history.push('/');
  };

  if (!note) return <div />;
  // console.log(props);
  return (
    <Container>
      <Title>{note.title}</Title>
      <Content>{note.textBody}</Content>
      <EditLink to={`/note/${note._id}/edit`}>edit</EditLink>
      <DeleteButton onClick={handleDelete}>delete</DeleteButton>
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
