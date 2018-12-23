import React, { Component } from 'react';
import styled from 'styled-components';
import { showDeleteModal, editingNote } from '../actions';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const LoggedOutViewContainer = styled.div`
  text-align: left;
  width: 75%;
`;

class LoggedOutView extends Component {
  render() {
    console.log('does this console log', this.props.editingNote);
    return (
      <LoggedOutViewContainer>
        <h1>Ty for Using this App!</h1>,{' '}
      </LoggedOutViewContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeNote: state.activeNote,
    isActive: state.isActive,
    editingNote: state.editingNote,
    mightDelete: state.mightDelete
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { showDeleteModal, editingNote }
  )(LoggedOutView)
);
