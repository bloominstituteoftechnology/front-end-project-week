import React, { Component } from 'react';
import styled from 'styled-components';
import Note from './note';

const NoteListStyled = styled.div`
  width: 100%;
  padding: 10px;
  background-color: rgb(243, 243, 243);
`

class NotesList extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <NoteListStyled>
        <h1>Your Notes:</h1>
        <div style={{ display: "flex", flexFlow: "row wrap" }}>
          {this.props.notes.map((note) => {
            return (
              <Note key={note.id} note={note}/>
              )})}
        </div>
      </NoteListStyled>
    )
  }
}

export default NotesList;