import React, { Component } from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
  border: solid purple;
  margin: 0 auto;
  background: white;
  width: 25%;
`;

class Note extends Component {
  render() {
    return (
      <NoteContainer>
        <h2>{this.props.note.title}</h2>
        <p>{this.props.note.textBody}</p>
      </NoteContainer>
    );
  }
}

export default Note;
