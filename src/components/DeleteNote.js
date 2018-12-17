import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'reactstrap';
import './DeleteNote.css';
import axios from 'axios';

class DeleteNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleDeleteNote = (id) => {
    console.log('handleDeleteNoteFired');
    axios
      .delete(`https://lambdanotesbyhonda.herokuapp.com/notes/${id}`)
        .then(res => {
          console.log(res);
          window.location.reload();
        })
        .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div>
        <p className='delete' onClick={this.toggle}>delete</p>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='delete-modal'>
            <p className='warning'>Are you sure you want to delete this?</p>
            <div className='delete-modal-buttons'>
                <div className='delete-button-link'>
                    <Link to='/'>
                        <button onClick={() => this.handleDeleteNote(this.props.currentNoteID)} className='delete-button'>Delete</button>
                    </Link>
                </div>
                <button onClick={this.toggle} className='cancel-button'>No</button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default DeleteNote; 