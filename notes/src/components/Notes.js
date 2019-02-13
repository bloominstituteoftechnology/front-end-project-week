import React from "react";
import { connect } from "react-redux";
import { fetchNotes } from "../actions/noteActions";

import NoteCard from "./NoteCard";
import Search from "./Search";

import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(248, 249, 250);
  overflow-wrap: break-word;
  width: 100%;
`;

const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 15px;
  min-width: 100vw;
  overflow: hidden;
`;

const NoteContainer = styled.div`
  flex: 0 1 20%;
  min-width: 275px;
  height: 300px;
  background-color: white;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  margin: 20px 25px 20px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

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

  render() {
    const filtered = this.props.notes.filter(note => this.filterNotes(note));

    return (
      <Container>
        <Search search={this.props.search} inputHandler={this.inputHandler} />
        {this.props.loading ? <h1>LOADING....</h1> : null}
        {this.props.error !== null ? <h1>{this.props.error}</h1> : null}
        <NotesContainer>
          {filtered.map(note => {
            return (
              <NoteContainer>
                <NoteCard key={note.id} note={note} />
              </NoteContainer>
            );
          })}
        </NotesContainer>
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
