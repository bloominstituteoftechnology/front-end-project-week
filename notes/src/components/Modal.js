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
        <h3 className='modal__title'>Selected Option</h3>
        <button className='button' onClick={props.handleDelete}>Delete</button>
        <button className='button' onClick={props.toggle}>No</button>
    </Modal>
);


export default ModalOption;