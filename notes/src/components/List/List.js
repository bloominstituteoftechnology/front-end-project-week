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
  NewOldMobileButton,
} from './styles';
import { apiUri } from '../../globalVariables';

export default class List extends Component {
  state = {
    notes: [],
    search: '',
    sortReverse: true,
  };
  componentDidMount() {
    axios
      .get(apiUri)
      .then((res) => {
        this.setState(() => ({ notes: res.data.notes }));
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

  sortButton = () => {
    if (this.state.sortReverse) {
      return 'Old → New';
    } else if (!this.state.sortReverse) {
      return 'New → Old';
    }
  };

  sortMobileButton = () => {
    if (this.state.sortReverse) {
      return 'Oldest';
    } else if (!this.state.sortReverse) {
      return 'Newest';
    }
  };

  handleSortToggle = () =>
    this.setState({ sortReverse: !this.state.sortReverse });

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
          <NewOldButton onClick={this.handleSortToggle}>
            {this.sortButton()}
          </NewOldButton>
          <NewOldMobileButton onClick={this.handleSortToggle}>
            {this.sortMobileButton()}
          </NewOldMobileButton>
        </SearchBar>
        <ListTitle>Your Notes:</ListTitle>
        <StyledListDiv>
          {this.handleSort(
            this.filteredNotes().map((note) => (
              <StyledNoteLink to={`/note/${note.id}`} key={note.id}>
                <NoteCard note={note} />
              </StyledNoteLink>
            ))
          )}
        </StyledListDiv>
      </StyledView>
    );
  }
}
