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
  NewOldButton,
  OldNewButton,
} from './styles';

export default class List extends Component {
  state = {
    notes: [],
    search: '',
    sortReverse: true,
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

  filteredNotes = () => {
    return this.state.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
        note.textBody.toLowerCase().includes(this.state.search.toLowerCase())
    );
  };

  handleNewestFirst = () => this.setState({ sortReverse: true });

  handleOldestFirst = () => this.setState({ sortReverse: false });

  handleSort = (arr) => {
    if (this.state.sortReverse) {
      return arr.reverse();
    } else if (!this.state.sortReverse) {
      return arr;
    }
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
          <NewOldButton onClick={this.handleNewestFirst}>
            Sort: Newest First
          </NewOldButton>
          <OldNewButton onClick={this.handleOldestFirst}>
            Sort: Oldest First
          </OldNewButton>
        </SearchBar>
        <ListTitle>Your Notes:</ListTitle>
        <StyledListDiv>
          {this.handleSort(
            this.filteredNotes().map((note) => (
              <StyledNoteLink to={`/note/${note._id}`} key={note._id}>
                <NoteCard note={note} />
              </StyledNoteLink>
            ))
          )}
        </StyledListDiv>
      </StyledView>
    );
  }
}
