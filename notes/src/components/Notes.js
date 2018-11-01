import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100%;
`;

export const Heading = styled.h2`
  
`;

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  max-height: 100%;
  margin: 30px 0;
  flex-wrap: wrap;
`;

export const Note = styled.div`
  width: 29%;
  height: 300px;
  margin: 0 1%;
  margin-bottom: 20px;
  border: 1px solid grey;
  padding: 20px;
  background-color: white;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
`;

export const Border = styled.hr`
  border: 1px solid black;
`;

export const Text = styled.p`
  height: 200px;
  font-size: 1.4rem;
  line-height: 25px;
`;

const Notes = props => {
  return (
    <Container>
      <Heading>Your Notes:</Heading>
      <Wrapper>
        {props.notes.map((note, i) => (
          <Note key={i}>
            <Link to={`/notes/${note._id}`} >
              <Title>{note.title}</Title>
            </Link>
            <Border />
            <Text>{note.textBody}</Text>
          </Note>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Notes;
