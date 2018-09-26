import React, { Component } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  background-color: #f2eff1;
`;

const SearchNotesInput = styled.input`
height: 40px;
width: 30%;
margin-left 35%;
margin-top: 5%;
margin-bottom: 20px;
border-radius: 5px;
font-size: 20px;
::placeholder{
    padding-left: 10px;
}
`;

const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-height: 100vh;
  width: 100%;
  height: auto;
  background-color: #f2f0f2;
`;

const NotesListView = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 30%;
  border-radius: 5px;
  height: 200px;
  margin: 15px 0;
  text-align: left;
  word-wrap: break-word;
  background-color: #ffffff;
  overflow: hidden;
`;

const NoteTitle = styled.h3`
  font-weight: bold;
  border-bottom: 1px solid #d0d0d0;
  width: 90%;

  height:15%
  margin: 10px auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: baseline;
  &:Hover {
    cursor: pointer;
  }
`;

const NoteBody = styled.p`
  color: black;
  text-decoration: none;
  width: 90%;
  height: 85%;
  margin: 0 auto;
  overflow: hidden;
  white-space: normal;
  text-overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

class NoteSearch extends Component {
  state = {
    notes: [],
    
    search: "",
  };

  componentDidMount(){
    this.setState={
      notes: this.props.notes,
      search: this.state.notes,
    }
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log([event.target.name] + ' being searched for is: '+ event.target.value);
    console.log(this.filteredContacts);
  };

  filteredContacts = this.props.notes.filter(note => {
    return (
      note.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
)});

  render() {
     return (
      <NotesContainer>
        <SearchContainer>
          <SearchNotesInput
            type="text"
            name="title"
            placeholder="Search Titles"
            onChange={this.handleInput}
          />
        </SearchContainer>
        {this.filteredContacts.map(note => {
          return (
            <NotesListView key={note._id}>
              <NoteTitle
                onClick={() => this.props.history.push(`/notes/${note._id}`)}
              >
                {note.title}
              </NoteTitle>
              <NoteBody
                onClick={() => this.props.history.push(`/notes/${note._id}`)}
              >
                {note.textBody}
              </NoteBody>
            </NotesListView>
          );
        })}
      </NotesContainer>
    );
  }
}

export default NoteSearch;
