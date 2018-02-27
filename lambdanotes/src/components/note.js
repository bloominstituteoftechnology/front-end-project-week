import React, { Component } from 'react';
import styled from 'styled-components';

const NoteStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  border: 1px solid rgb(166, 166, 166);
  padding: 10px;
  margin: 10px;
  background-color: rgb(255, 255, 255);
`;

class Note extends Component {
  render() {
    return (
        <NoteStyled>
          <h4>{this.props.note.title}</h4>
          <hr style={{ width: "100%"}}/>
          <p>{this.props.note.body}</p>
        </NoteStyled>
    )
  }
}

export default Note;