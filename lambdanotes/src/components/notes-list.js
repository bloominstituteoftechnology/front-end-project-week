import React, { Component } from 'react';
import styled from 'styled-components';
import Note from './note';

const NoteListStyled = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: rgb(243, 243, 243);
  display: flex;
  flex-direction: column;

  h1 {
    padding: 10px;
  }
`

class NotesList extends Component {
  render() {
    return (
      <NoteListStyled>
        <h1>Your Notes:</h1>
        <div style={{ display: "flex", flexFlow: "row wrap" }} >
          {this.props.notes.map((note) => {
            return (
              <Note key={note.id} note={note} showNoteDetails={this.props.showNoteDetails} />
              )})}
        </div>
      </NoteListStyled>
    )
  }
}

export default NotesList;