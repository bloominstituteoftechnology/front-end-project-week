import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { hideDeleteModal, deleteNote } from '../actions';

const ModalViewContainer = styled.div`
  background: #d7d7d7;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: black;
  width: 100%;
  max-width: 2000px;
  border: 1px solid gray;
  font-size: 62.5%;
  box-sizing: border-box;
  position: fixed;
  opacity: 0.9;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: white;
  height: 45vh;
  font-size: calc(10px + 2vmin);
  color: black;
  width: 80%;
  border: 1px solid gray;
  margin: 0 auto;
  font-size: 62.5%;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  border: solid black;
  opacity: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20%;
`;

const NoteAppButton = styled.button`
  background-color: teal;
  color: white;
  width: 40%;
  font-size: 2rem;
  padding: 30px 20px;
  margin-bottom: 30px;
`;

const DeleteModalText = styled.h1`
  font-size: 2rem;
  width: 100%;
  text-align: center;
`;

const DeleteButton = styled(NoteAppButton)`
  background-color: red;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

class DeleteModal extends Component {
  state = {
    title: this.props.activeNote.title,
    textBody: this.props.activeNote.textBody,
    id: this.props.activeNote.id,
    user_id: this.props.activeNote.user_id
  };

  DeleteNoteClickHandler = event => {
    event.preventDefault();
    console.log('State before you trying to delete: ', this.state);
    console.log('ID before you trying to delete: ', this.props.activeNote.id);
    this.props.deleteNote(this.props.activeNote.id, this.state);
    console.log('State after you trying to delete: ', this.state);
    this.props.history.push('/front-end-project-week');
  };

  CancelDeleteNoteClickHandler = event => {
    event.preventDefault();
    this.props.hideDeleteModal();
    // this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ModalViewContainer>
          <ModalContainer>
            <DeleteModalText>Are you sure you want to delete this?</DeleteModalText>

            <ButtonContainer>
              <DeleteButton onClick={this.DeleteNoteClickHandler}>Delete</DeleteButton>

              <NoteAppButton onClick={this.CancelDeleteNoteClickHandler}>No</NoteAppButton>
            </ButtonContainer>
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
    { hideDeleteModal, deleteNote }
  )(DeleteModal)
);
