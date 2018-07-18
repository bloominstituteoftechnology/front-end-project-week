import React, { Component } from 'react';
import Modal from 'react-modal';
import './DeleteNote.css'



Modal.setAppElement('#main')
class DeleteNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            modalIsOpen: true
        }
    }
    componentDidMount() {
        const { note } = this.props.location.state;
        this.setState({ note })
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div className='modal-ctn'>
                {/* <button onClick={this.openModal}>Open Modal</button> */}
                <Modal
                className="Modal"
                    isOpen={this.state.modalIsOpen}
                    // onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Delete Confirmation"
                    
                >
                    <h4>Are you sure you want to delete this?</h4>
                    <div className="dialog-ctn">
                        <div className="delete-btn dialog-btn" onClick={this.closeModal}>Delete</div>
                        <div className="edit-btn dialog-btn"onClick={this.closeModal}>No</div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default DeleteNote;