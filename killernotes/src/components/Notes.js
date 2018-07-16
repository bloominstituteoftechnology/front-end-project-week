import React, { Component } from 'react';
import styled from 'styled-components';
// import './Notes.css';
import NoteCard from './NoteCard';

const NotesDiv = styled.div`
  background-color: #f3f3f3;
  margin-left: 232px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Notes extends Component {
  render() {
    return (
      <NotesDiv>
        Your Notes:
        <Container>
          {this.props.notes.map(note => (
            <NoteCard key={note._id} note={note} />
          ))}
        </Container>
      </NotesDiv>
    );
  }
}

Notes.defaultProps = {
  notes: [],
};

export default Notes;
