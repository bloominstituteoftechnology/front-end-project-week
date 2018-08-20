import React, { Component } from 'react';
import styled from 'styled-components';
import NoteCard from './NoteCard';

const NotesDiv = styled.div`
  background-color: #f3f3f3;
  padding-left: 18px;
  margin-left: 233px;
  margin-right: 20px;
  margin-top: 16px;
  word-break: break-all;
  border: 1px solid rgb(151, 151, 151);
  width: 646px;
  > p {
    margin-top: 55px;
    font-size: 22px;
    font-family: roboto;
    margin-left: 22px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Notes extends Component {
  componentDidMount() {
    //scroll to the top
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <NotesDiv>
        <p>Your Notes:</p>
        <Container>
          {this.props.notes.map(note => (
            <NoteCard key={note.id} note={note} />
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
