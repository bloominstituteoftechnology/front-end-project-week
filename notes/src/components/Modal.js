import React from 'react';
import Modal from 'react-modal';

import './modal.css';

const ModalOption = (props) => (
    <Modal
        isOpen={props.modal}
        onRequestClose={props.handleDeleteModal}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className='modal'
    >
        <h3 className='modal__title'>Are you sure you want to delete this?</h3>
        <button className='button button-danger' onClick={props.handleDelete}>Delete</button>
        <button className='button button-success' onClick={props.toggle}>No</button>
    </Modal>
);


export default ModalOption;