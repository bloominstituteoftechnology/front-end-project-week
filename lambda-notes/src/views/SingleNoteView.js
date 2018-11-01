import React, { Component } from 'react';
import styled from 'styled-components';

import { deleteNote } from '../actions';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';

const SingleNoteViewContainer = styled.div`
  text-align: left;
  width: 75%;
`;

const TitleContainer = styled.div`
  height: 150px;
  padding-top: 85px;
  font-size: 2rem;
  padding-left: 4%;
`;

const SingleNoteContainer = styled.div`
  text-align: left;
`;

const LinkContainer = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  margin-right: 50px;
  color: black;
`;

class SingleNoteView extends Component {
  DeleteClickHandler = event => {
    event.preventDefault();
    this.props.deleteNote(this.props.activeNote._id);
    this.props.history.push('/');
  };

  render() {
    return (
      <SingleNoteViewContainer>
        {this.props.activeNote === undefined ? null : this.props.activeNote === undefined ? null : (
          <TitleContainer>
            <LinkContainer>
              <StyledLink to="/">Edit</StyledLink>
              <StyledLink onClick={this.DeleteClickHandler} to="/">
                Delete
              </StyledLink>
            </LinkContainer>
            <h2>{this.props.activeNote.title}</h2>
            <SingleNoteContainer>
              <p>{this.props.activeNote.textBody}</p>
            </SingleNoteContainer>
          </TitleContainer>
        )}
      </SingleNoteViewContainer>
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
    { deleteNote }
  )(SingleNoteView)
);
