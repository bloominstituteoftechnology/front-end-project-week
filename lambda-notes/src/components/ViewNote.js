import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { edit_note_clicked, delete_note } from '../actions/index';

import './css/ViewNote.css';

class ViewNote extends React.Component {
  state = {
    modalIsOpen: false,
  };
  render() {
    return (
      <div className="view">
        <div className="edit" onClick={this.handleEdit}>
          edit
        </div>
        <div>
        <div className='delete' onClick={this.openModal}>Delete</div>
        <Modal isOpen={this.state.modalIsOpen} style={customStyles} ariaHideApp={false}>
          <div> Are you sure you want to delete this? <br/>
          <button onClick={this.handleDelete}>Delete</button>
          <button onClick={this.closeModal}>No</button>
          </div>
        </Modal>
      </div>
        <h1 className="view-header"> {this.props.note.title} </h1>
        <p className="view-body"> {this.props.note.body} </p>
      </div>
    );
  }
  handleEdit = () => {
    this.props.edit_note_clicked(this.props.note);
  };
  handleDelete = () => {
    this.props.delete_note(this.props.note);

  }
  openModal = () => {
    this.setState({modalIsOpen: true});
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px'
  },
};

const mapStateToProps = state => {
  return {
    current: state.current,
    note: state.note,
  };
};

export default connect(mapStateToProps, { edit_note_clicked, delete_note })(ViewNote);
