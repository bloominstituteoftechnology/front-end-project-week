import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NoteCard from './NoteCard';

import styled from 'styled-components';

const Container = styled.div`
  background-color: rgb(241, 242, 242);
  overflow-wrap: break-word;
  width: 100%;
`;

const NotesHeader = styled.h2`
  padding-top: 65px;
  padding-left: 25px;
`;

const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 15px;
`;

const NoteContainer = styled.div`
  flex: 0 1 20%;
  min-width: 275px;
  height: 300px;
  background-color: white;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  margin: 15px 15px 30px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

class Notes extends Component {
  render() {
    return (
      <Container>
        <NotesHeader>Your Notes:</NotesHeader>
          <NotesContainer>
              {this.props.notes.map(note => {
                return (
                  <NoteContainer>
                    <Link to={`/notes/${note._id}`} style={{ textDecoration: 'none', color: 'black' }} >
                      <NoteCard
                        key={note._id}
                        title={note.title}
                        text={note.textBody}
                      />
                    </Link>
                    <button onClick={() => this.props.delete(note._id)}>Delete</button>
                  </NoteContainer>
                );
              })}
          </NotesContainer>
      </Container>
    );
  }
}

Notes.defaultProps = {
 notes: [],
};

export default Notes;
