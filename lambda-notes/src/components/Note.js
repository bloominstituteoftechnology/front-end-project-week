import React, { Component } from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
  border: 1px solid gray;
  background: white;
  width: 31%;
  height: 400px;
  margin-top: 20px;
  margin-bottom: 40px;
  overflow: hidden;
`;

const NoteTitle = styled.header`
  font-size: 2.25rem;
  font-weight: bold;
  margin: 20px 10%;
  border-bottom: 1px solid #aaa;
  padding-bottom: 10px;
`;

const NoteContent = styled.p`
  font-size: 1.75rem;
  padding: 0 10%;
  margin-top: -10px;
`;

class Note extends Component {
  render() {
    return (
      <NoteContainer>
        <NoteTitle>{this.props.note.title}</NoteTitle>
        <NoteContent>{this.props.note.textBody}</NoteContent>
      </NoteContainer>
    );
  }
}

export default Note;
