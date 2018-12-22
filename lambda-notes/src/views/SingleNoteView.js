import React, { Component } from 'react';
import styled from 'styled-components';
import { showDeleteModal, editingNote } from '../actions';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

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
    // this.props.deleteNote(this.props.activeNote._id);
    // this.props.history.push('/');
    this.props.showDeleteModal();
  };

  EditClickHandler = event => {
    event.preventDefault();
    console.log('editing a note');
    this.props.editingNote();
    this.props.history.push('/front-end-project-week/edit-note');
  };

  render() {
    console.log('does this console log', this.props.editingNote);
    return (
      <SingleNoteViewContainer>
        <TitleContainer>
          <LinkContainer>
            <StyledLink to="/front-end-project-week/edit" onClick={this.EditClickHandler}>
              Edit
            </StyledLink>
            <StyledLink to="/front-end-project-week" onClick={this.DeleteClickHandler}>
              Delete
            </StyledLink>
          </LinkContainer>
          <h2>{this.props.activeNote.title}</h2>
          <SingleNoteContainer>
            <p>
              {' '}
              <ReactMarkdown source={this.props.activeNote.textBody} />
            </p>
          </SingleNoteContainer>
        </TitleContainer>
      </SingleNoteViewContainer>
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
  )(SingleNoteView)
);
