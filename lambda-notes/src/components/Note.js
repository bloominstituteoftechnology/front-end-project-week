import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { showNote } from '../actions';

const NoteContainer = styled.div`
  border: 1px solid gray;
  background: white;
  width: 31%;
  height: 400px;
  margin-top: 20px;
  margin-bottom: 40px;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    ytext-decoration: none;
  }
  color: black;
`;

const NoteTitle = styled.header`
  font-size: 2.25rem;
  font-weight: bold;
  margin: 20px 10%;
  border-bottom: 1px solid #aaa;
  padding-bottom: 10px;
`;

const NoteContent = styled.p`
  font-size: 1.75rem;
  padding: 0 10%;
  margin-top: -10px;
`;

class Note extends Component {
  ViewNoteClickHandler = event => {
    event.preventDefault();
    console.log('the props on note are...', this.props);
    this.props.showNote(this.props.note);
    this.props.history.push(`/front-end-project-week/${this.props.note.id}`);
  };

  render() {
    return (
      <NoteContainer>
        <StyledLink onClick={this.ViewNoteClickHandler} to={`/front-end-project-week/${this.props.note.id}`}>
          <NoteTitle>{this.props.note.title}</NoteTitle>
          <NoteContent>
            {' '}
            <ReactMarkdown source={this.props.note.textBody} />
          </NoteContent>
        </StyledLink>
      </NoteContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeNote: state.activeNote
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { showNote }
  )(Note)
);
