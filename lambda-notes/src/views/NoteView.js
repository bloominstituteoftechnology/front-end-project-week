import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote, deleteNote } from '../actions';
import styled from 'styled-components';
import Note from '../components/Note';
import NoteNav from '../components/NoteNav';
import Modal from '../components/Modal';
import Portal from '../components/Portal';
import StyledSpinner from '../styles/StyledSpinner';

const StyledNote = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 5px;
  margin-bottom: 5rem;
  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.7);

  h2 {
    font-size: 4.2rem !important;
    margin-bottom: 1rem !important;
  }

  hr {
    margin-bottom: 3rem !important;
  }
`;

class NoteView extends Component {
  state = {
    id: this.props.match.params.id,
    showModal: false
  };

  componentDidMount() {
    const { id } = this.state;
    this.props.getNote(id);
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  deleteNote = () => {
    const { id } = this.state;
    this.props.deleteNote(id);
    this.props.history.push('/');
  };

  render() {
    const { showModal } = this.state;
    const { isFetchingNote } = this.props;
    return (
      <div className="View">
        {isFetchingNote ? (
          <StyledSpinner />
        ) : (
          <>
            {showModal ? (
              <Portal>
                <Modal
                  toggleModal={this.toggleModal}
                  deleteNote={this.deleteNote}
                />
              </Portal>
            ) : null}
            <NoteNav id={this.props.note._id} toggleModal={this.toggleModal} />
            <StyledNote>
              <h2>{this.props.note.title} </h2>
              <hr />
              <Note note={this.props.note} />
            </StyledNote>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.notes.note,
    isFetchingNote: state.notes.isFetchingNote,
    error: state.notes.error
  };
};

export default connect(
  mapStateToProps,
  { getNote, deleteNote }
)(NoteView);
