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

  header {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;
    
    .searchContainer {
      margin-top: 20px;
    }
  }

`

class NotesList extends Component {
  render() {
    return (
      <NoteListStyled>
        <header>
          <h1>Your Notes:</h1>
          <div className="searchContainer">Search: <input /></div>
        </header>
        <div style={{ display: "flex", flexFlow: "row wrap" }} >
          {this.props.notes.map((note) => {
            return (
              <Note key={note.id} note={note} showNoteDetails={this.props.showNoteDetails} />
            )
          })}
        </div>
      </NoteListStyled>
    )
  }
}

export default NotesList;