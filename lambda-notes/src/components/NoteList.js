import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';
import Note from './Note';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const NotesContainer = styled.div`
  background: #f3f3f3;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 2.5%;
`;

class NoteList extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <NotesContainer>
        {this.props.fetchingNotes ? <h1>Loading the notes...</h1> : null}
        {this.props.notes.map(note => {
          return <Note key={note.id} note={note} />;
        })}
      </NotesContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    error: state.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      getNotes
    }
  )(NoteList)
);
