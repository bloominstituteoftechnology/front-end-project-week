import React, { Component } from 'react';
import styled from 'styled-components';
import { showDeleteModal, editingNote } from '../actions';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

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
    this.props.editingNote();
    this.props.history.push('/edit-note');
  };

  render() {
    console.log('does this console log', this.props.editingNote);
    return (
      <SingleNoteViewContainer>
        <TitleContainer>
          <LinkContainer>
            <StyledLink to="/" onClick={this.EditClickHandler}>
              Edit
            </StyledLink>
            <StyledLink to="/" onClick={this.DeleteClickHandler}>
              Delete
            </StyledLink>
          </LinkContainer>
          <h2>{this.props.activeNote.title}</h2>
          <SingleNoteContainer>
            <p>{this.props.activeNote.textBody}</p>
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
