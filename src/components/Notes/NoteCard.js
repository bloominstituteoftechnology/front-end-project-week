import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NoteCard = (props) => {
  // console.log(props);
  return (
    <Card to={`/note/${props.note.id}`}>
      <Title>{props.note.title}</Title>
      <Text>{props.note.textBody}</Text>
    </Card>
  );
};

export default NoteCard;

const Card = styled(NavLink)`
  text-decoration: none;
  color: black;
  background: white;
  width: 30%;
  margin: 1%;
  border: 2px solid #cfcfcf;
  padding: 10px;
  height: 200px;
  overflow: hidden;
  hyphens: auto;
  line-height: 1.4rem;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  border-bottom: 2px solid #cfcfcf;
  padding-bottom: 2px;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 5px 0;
`;
