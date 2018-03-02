import React, { Component } from 'react';
import styled from 'styled-components';
import Note from './note';

const NoteListStyled = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 20px;
  background-color: rgb(243, 243, 243);
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgb(151, 151, 151);
  border-right: 1px solid rgb(151, 151, 151);

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
      let filteredNotes = this.props.notes.filter(note => {
        let searchTerms = event.target.value.toLowerCase().split(' ')
        let containsTerm = true;
        searchTerms.forEach((term) => {
          if (note.title.toLowerCase().includes(term) !== true) {
            containsTerm = false;
          }
        })
        return containsTerm;
      })
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
      <NoteListStyled className="NotesList">
        <header className="NotesList__header">
          <h2>Your Notes:</h2>
          <div className="searchContainer">
            Search: <input onChange={this.handleSearch} value={this.state.searchInput} />
          </div>
        </header>
        <div style={{ display: "flex", flexFlow: "row wrap"}} className="NotesList__body" >
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