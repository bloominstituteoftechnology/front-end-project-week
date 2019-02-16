import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Note from './Note';

export default class NotesList extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Title>Your Notes:</Title>
        </Header>
        <ListContainer>
          {this.props.notes.map((note) => {
            return <NoteDetails key={note.id} note={note} />
          })}
        </ListContainer>
      </Container>
    );
  }
}

function NoteDetails({ note }) {
  const { title, textBody } = note;
  return (
    <Link to={`/notes/${note.id}`}>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #F2F1F2;
  border: 1px solid #B7B7B7;
  width: 80%;
`;

const Header = styled.div`
  margin: 85px 25px 10px 25px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  margin: auto;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 0px 10px;
  margin: 0 auto;
  margin-top: 20px;
`;

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid #B7B7B7;
  height: 180px;
  width: 180px;
  margin: 10px 15px;
`;

const NoteTitle = styled.h3`
  font-size: 23px;
  font-weight: bold;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  border-bottom: 1px solid #B7B7B7;
  width: 85%;
  padding: 5px 0px;
  margin: 5px 10px;
`;

const NoteText = styled.div`
  width: 85%;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: .5rem;
  margin: 5px 10px;
`;
