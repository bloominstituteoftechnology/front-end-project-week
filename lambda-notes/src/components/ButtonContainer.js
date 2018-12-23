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
  background-color: #ef62a4;
  color: white;
  width: 90%;
  font-size: 1.2rem;
  padding: 30px 5%;
  margin: 0 5%;
  margin-top: 20px;
`;

class ButtonContainer extends Component {
  ViewNotesClickHandler = event => {
    event.preventDefault();
    this.props.goHome(this.props.activeNote);
    this.props.history.push('/front-end-project-week');
  };

  AddNoteClickHandler = event => {
    event.preventDefault();
    console.log('State before: ', this.state);
    this.setState({ addingNote: true });
    console.log('State after: ', this.state);
    this.props.history.push('/front-end-project-week/new-note');
  };

  render() {
    return (
      <SideBar>
        <Link to="/front-end-project-week">
          {' '}
          <NoteAppButton onClick={this.ViewNotesClickHandler}>View Your Notes</NoteAppButton>
        </Link>
        <Link onClick={this.AddNoteClickHandler} to="/front-end-project-week/new-note">
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
