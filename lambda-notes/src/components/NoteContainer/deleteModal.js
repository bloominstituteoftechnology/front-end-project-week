import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-responsive-modal';



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
                    <button onClick={this.props.deleteNote} className= 'delete-button'>delete</button>
                    <button onClick={this.onCloseModal}className=' no-button'>No</button>
                </Modal>
                </div>
            </div>
        )
    }
}

export default DeleteModal;
