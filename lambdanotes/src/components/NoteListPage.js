import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Note from "./Note";
import { getNotes } from "../actions";
import {
  PageContainer,
  PageTitle,
  StatusMessage
} from "../styles/SharedStyles";

const NoteList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class NoteListPage extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <PageContainer listPage>
        <PageTitle>Your Notes:</PageTitle>
        {this.props.gettingNotes ? (
          <StatusMessage>Loading notes...</StatusMessage>
        ) : this.props.notes.length ? (
          <NoteList>
            {this.props.notes.map(note => (
              <Note key={note._id} note={note} />
            ))}
          </NoteList>
        ) : !this.props.error ? (
          <StatusMessage>No notes to display.</StatusMessage>
        ) : (
          <StatusMessage error>{this.props.error}</StatusMessage>
        )}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notesReducer.notes,
  gettingNotes: state.notesReducer.gettingNotes,
  error: state.notesReducer.error
});

export default connect(
  mapStateToProps,
  { getNotes }
)(NoteListPage);
