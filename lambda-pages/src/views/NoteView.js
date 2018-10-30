import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote, deleteNote } from '../actions';
import Note from '../components/Note';
import NoteNav from '../components/NoteNav';
import Modal from '../components/Modal';
import Portal from '../components/Portal';

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
          <div>Loading note...</div>
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
            <h2>{this.props.note.title} </h2>
            <Note note={this.props.note} />
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
