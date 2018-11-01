import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';

const ModalViewContainer = styled.div`
  background: #d7d7d7;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: black;
  width: 100%;
  max-width: 2000px;
  border: 1px solid gray;
  margin: 0;
  font-size: 62.5%;
  box-sizing: border-box;
  position: fixed;
  opacity: 0.75;
  z-index: 1;
`;

const ModalContainer = styled.div`
  background: white;
  min-height: 10vh;
  font-size: calc(10px + 2vmin);
  color: black;
  width: 50%;
  border: 1px solid gray;
  margin: 0 auto;
  font-size: 62.5%;
  box-sizing: border-box;
  position: fixed;
  z-index: 2;
  margin: 25% 25%;
  border: solid black;
  opacity: 1;
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

const DeleteButton = styled(NoteAppButton)`
  background-color: red;
`;

class DeleteModal extends Component {
  DeleteNoteClickHandler = event => {
    event.preventDefault();
    console.log('State before you trying to delete: ', this.state);
    console.log('ID before you trying to delete: ', this.props.activeNote._id);
    this.props.deleteNote(this.props.activeNote._id);
    console.log('State after you trying to delete: ', this.state);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ModalViewContainer>
          <ModalContainer>
            <h1>Are you sure you want to delete this?</h1>
            <Link to="/">
              <DeleteButton onClick={this.DeleteNoteClickHandler}>Delete</DeleteButton>
            </Link>
            <NoteAppButton onClick={this.DeleteNoteClickHandler}>No</NoteAppButton>
          </ModalContainer>
        </ModalViewContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mightDelete: state.mightDelete,
    activeNote: state.activeNote
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { deleteNote }
  )(DeleteModal)
);
