import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Note from './Note';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #F2F1F2;
  border: 1px solid #B7B7B7;
  width: 80%;
`;

const Header = styled.div`
  margin: 85px 25px 10px 10px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  padding: 0px 10px;
  margin: 0 auto;
`;

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFF;
  border: 1px solid #B7B7B7;
  height: 180px;
  width: 180px;
  margin: 10px auto;
`;

const NoteTitle = styled.h3`
  font-size: 25px;
  font-weight: bold;
  border-bottom: 1px solid #B7B7B7;
  width: 85%;
  margin: 5px 10px;
`;

const NoteText = styled.div`
  width: 85%;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  padding-bottom: .5rem;
  margin: 5px 10px;
`;

export default class NotesList extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Title>Your Notes:</Title>
        </Header>
        <ListContainer>
          {this.props.notes.map((note) => {
            return <NoteDetails key={note._id} note={note} />
          })}
        </ListContainer>
      </Container>
    );
  }
}

function NoteDetails({ note }) {
  const { title, textBody } = note;
  return (
    <Link to={`/get/${note._id}`}>
      <NoteContainer>
        <NoteTitle>{title}</NoteTitle>
        <NoteText>{textBody}</NoteText>
      </NoteContainer>
    </Link>
  );
}

NotesList.defaultProps = {
  Notes: [],
};
