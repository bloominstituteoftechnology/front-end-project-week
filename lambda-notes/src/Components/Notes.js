import React from "react";
import { connect } from "react-redux";
import { fetchNotes } from "../actions/noteActions";

import NoteCard from "./NoteCard";
import Search from "./Search";

import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
`

const SearchBar = styled.div`
  width: 50%
  max-width: 1080px;
  margin: 1% auto;
`
const NoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  filterNotes = note => {
    const lowerCase = this.state.search.toLowerCase();

    if (
      note.title.toLowerCase().includes(lowerCase) ||
      note.textBody.toLowerCase().includes(lowerCase)
    ) {
      return note;
    }
  };

  // TODO: Fix search
  render() {
    const filtered = this.props.notes.filter(note => this.filterNotes(note));

    return (
      <Container>
        <SearchBar>
          <Search search={this.props.search} inputHandler={this.inputHandler} />
        </SearchBar>
        <NoteContainer>
          {filtered.map(note => {
            return (
              <div>
                <NoteCard key={note.id} note={note} />
              </div>
            );
          })}
        </NoteContainer>
      </Container>
    );
  }
}

Notes.defaultProps = {
  notes: []
};

const mapStateToProps = state => {
  return {
    notes: state.noteReducer.notes,
    loading: state.noteReducer.loading,
    error: state.noteReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(Notes);