import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
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
        const note = this.props.note;
        this.setState({ note })
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    Delete = () => {
        this.props.onDelete(this.state.note)
    }
    render() {
        return (
            <div className='modal-ctn'>
                <Modal
                    className="Modal"
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Delete Confirmation"

                >
                    <h4>Are you sure you want to delete this?</h4>
                    <div className="dialog-ctn">
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <div className="delete-btn dialog-btn" onClick={this.Delete}>Delete</div>
                        </Link>
                        <div className="edit-btn dialog-btn" onClick={this.props.onClose}>No</div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default DeleteNote;