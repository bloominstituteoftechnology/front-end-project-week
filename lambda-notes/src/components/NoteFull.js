import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getNote, deleteNote } from '../actions/actions';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px 100px',
  },
};

class NoteFull extends Component {
  state = {
    redirect: false,
    modalOpen: false,
  };
  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }

  deleteNote = () => {
    this.props.deleteNote(this.props.match.params.id);
    this.setState({
      redirect: true,
    });
  };
  openModal = () => {
    this.setState({ modalOpen: true });
  };

  afterOpenModal = () => {};

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Delete"
          shouldCloseOnOverlayClick={true}
        >
          <p>Are you sure you want to delete this?</p>
          <div className='d-flex'>
          <button onClick={this.deleteNote} type="button" className="btn delete">
            Delete
          </button>
          <button onClick={this.closeModal} type="button" className="btn">
            No
          </button></div>
        </Modal>
        {this.props.currentNote.map(note => {
          return (
            <div key={note.id} className="full-note">
              <p className="text-right">
                <Link to={`/edit/${note.id}`}>edit</Link>
                <Link
                  onClick={this.openModal}
                  /*onClick={this.deleteNote}*/ to={`#`}
                >
                  delete
                </Link>
              </p>
              <h3>{note.title}</h3>
              <p className="note-body">{note.body}</p>
            </div>
          );
        })}
        {this.state.redirect && <Redirect to={'/'} />}
      </div>
    );
  }
}
Modal.setAppElement('#root');
const mapStateToProps = state => {
  return {
    error: state.error,
    currentNote: state.currentNote,
  };
};

export default connect(mapStateToProps, { getNote, deleteNote })(NoteFull);
