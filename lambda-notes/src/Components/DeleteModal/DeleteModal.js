import React from 'react';
import {Link} from 'react-router-dom';
import './DeleteModal.css';

function DeleteModal(props) {
    
    return(
        <div className={props.showModal ? 'delete-modal-block' : 'hide' } >
            <p>Are you sure you want to delete this?</p>
            <div className='buttons-block'>
                <div className='delete-modal-button delete-button' onClick={props.showDeleteModal} onClick={props.handleDelete}><Link to='/' className='delete-link'>Delete</Link></div>
                <div className='delete-modal-button no-button' onClick={props.showDeleteModal}>No</div>
            </div>
        </div>
    );
}

export default DeleteModal;