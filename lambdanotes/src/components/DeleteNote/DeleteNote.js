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
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)})

    window.location.reload();
  }

  render() {
    return (
      <div>
        <p className='delete' onClick={this.toggle}>delete</p>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='deleteNoteModal'>
            <p className='warningMessage'>Are you sure you want to delete this?</p>
            <div className='deleteNoteModalButtons'>
                <div onClick={() => this.handleDeleteNote(this.props.currentNoteID)} className='entireDeleteButton'>
                    <Link onClick={() => this.handleDeleteNote(this.props.currentNoteID)} to='/'>
                        <button onClick={() => this.handleDeleteNote(this.props.currentNoteID)} className='deleteButton'>Delete</button>
                    </Link>
                </div>
                <button className='cancelButton' onClick={this.toggle}>No</button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default DeleteNote;