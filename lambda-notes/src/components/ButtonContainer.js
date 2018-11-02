import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { showNote, goHome } from '../actions';

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const NoteAppButton = styled.button`
  background-color: #2ac0c4;
  color: white;
  width: 90%;
  font-size: 2rem;
  padding: 30px 5%;
  margin: 0 5%;
  margin-bottom: 30px;
`;

class ButtonContainer extends Component {
  ViewNotesClickHandler = event => {
    event.preventDefault();
    this.props.goHome(this.props.activeNote);
    this.props.history.push('/');
  };

  AddNoteClickHandler = event => {
    event.preventDefault();
    console.log('State before: ', this.state);
    this.setState({ addingNote: true });
    console.log('State after: ', this.state);
    this.props.history.push('/new-note');
  };

  render() {
    return (
      <SideBar>
        <Link to="/">
          {' '}
          <NoteAppButton onClick={this.ViewNotesClickHandler}>View Your Notes</NoteAppButton>
        </Link>
        <Link onClick={this.AddNoteClickHandler} to="/new-note">
          {' '}
          <NoteAppButton onClick={this.AddNoteClickHandler}>+ Create New Note</NoteAppButton>
        </Link>
      </SideBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingNote: state.addingNote
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { showNote, goHome }
  )(ButtonContainer)
);
