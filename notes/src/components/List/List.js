import React, { Component } from 'react';
import axios from 'axios';
import NoteCard from '../NoteCard/NoteCard';
import {
  StyledView,
  ListTitle,
  StyledListDiv,
  StyledNoteLink,
  SearchBar,
  SearchInput,
} from './styles';

export default class List extends Component {
  state = {
    notes: [],
    search: '',
  };
  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then((res) => {
        this.setState(() => ({ notes: res.data }));
      })
      .catch((error) => {
        console.error('Server Error', error);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.state.notes.length === 0) {
      return <ListTitle>Loading your notes...</ListTitle>;
    }
    return (
      <StyledView>
        <SearchBar>
          <SearchInput
            name="search"
            placeholder="Search"
            onChange={this.handleChange}
            value={this.state.search}
          />
        </SearchBar>
        <ListTitle>Your Notes:</ListTitle>
        <StyledListDiv>
          {this.state.notes
            .filter((note) =>
              note.title.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((note) => (
              <StyledNoteLink to={`/note/${note._id}`} key={note._id}>
                <NoteCard note={note} />
              </StyledNoteLink>
            ))}
        </StyledListDiv>
      </StyledView>
    );
  }
}
