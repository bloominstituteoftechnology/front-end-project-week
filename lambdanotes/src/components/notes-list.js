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

      input {
        outline: none;
      }

      input:focus {
        outline: 1px solid rgb(94, 190, 195);
      }
    }
  }
`

class NotesList extends Component {
  state = {
    notesFiltered: [],
  }


  handleSearch = (event) => {
    if (event.target.value.length > 0) {
      let filteredNotes = this.props.notes.filter(note => note.title.toLowerCase().includes(event.target.value.toLowerCase()))
      this.setState({ notesFiltered: filteredNotes })
    }
    else {
      this.setState({ notesFiltered: this.props.notes })
    }
  }

  componentDidMount() {
    this.setState({ notesFiltered: this.props.notes });
  }

  render() {
    return (
      <NoteListStyled>
        <header>
          <h1>Your Notes:</h1>
          <div className="searchContainer">
            Search: <input onChange={this.handleSearch} value={this.state.searchInput} />
          </div>
        </header>
        {/* <div style={{ display: "flex", flexFlow: "row wrap" }} >
          {this.props.notes.map((note) => {
            return (
              <Note
                key={note.id}
                note={note}
                showNoteDetails={this.props.showNoteDetails}
              />
            )
          })}
        </div> */}
        <div style={{ display: "flex", flexFlow: "row wrap" }} >
          {this.state.notesFiltered.map((note) => {
            return (
              <Note
                key={note.id}
                note={note}
                showNoteDetails={this.props.showNoteDetails}
              />
            )
          })}
        </div>
      </NoteListStyled>
    )
  }
}

export default NotesList;