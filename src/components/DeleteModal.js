import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import NoteButton from './NoteButton';

const DeleteModal = (props) => {
    return (
        <div className="edit-delete">
            <Link to={`edit/${props.id}`}>edit</Link>
            <a onClick={props.toggle}>delete</a>
            <Modal isOpen={props.modal}
                toggle={props.toggle}
                size="lg"
                className="delete-modal">
                <ModalBody>
                    <p className="confirm">Are you sure you want to delete this?</p>
                    <div className="btn-container">
                        <NoteButton color="danger" value="Delete" onClick={props.deleteNote}/>
                        <NoteButton color="main" value="No" onClick={props.toggle}/>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}
 
export default DeleteModal;