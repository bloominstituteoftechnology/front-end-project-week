import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './deleteModal.css';


class DeleteModal extends Component {
    state = {
        open: false
    };



    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;

        return (
            <div>
                <p onClick={this.onOpenModal}>delete</p>
                <div className='modal'>
                    <Modal open={open} onClose={this.onCloseModal}>
                        <h3>Are you sure you want to delete this?</h3>
                        <div className='buttons'>
                            <button onClick={this.props.deleteNote} className='delete-button'>Delete</button>
                            <button onClick={this.onCloseModal} className=' no-button'>No</button>
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default DeleteModal;
