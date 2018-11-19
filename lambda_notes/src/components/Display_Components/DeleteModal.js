import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';



export default class DeleteModal extends Component {

    state = {
        deleteMessage: '',
        open: false,
    }

    onOpenModal = () => {
        this.setState({ open: true, });
    };

    onCloseModal = () => {
        this.setState({ open: false, })
    };

    onDelete = (e) => {
        e.preventDefault();
        this.deleteNote(e.target.key)
    }

  deleteNote = (id) => {
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(res => {
            this.setState({
                deleteMessage: "Note deleted successfully",
            })
        })
        .catch(err => console.log(err))
    }

  render() {
    const { open } = this.state;
      return (
            <div>
                <div onClick={this.onOpenModal}>Delete</div>
                <Modal open={open} onClose={ this.onCloseModal } center>
                <h4>Are you sure you want to delete this?</h4>
                <button onClick={this.onDelete}>Delete</button>
                <button onClick={this.onCloseModal}>No</button>
                </Modal>
            </div>
        )
    }
}
