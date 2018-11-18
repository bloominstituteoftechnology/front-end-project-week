import React from 'react';
import {Link} from 'react-router-dom';

import './notes.css';

const DeleteModal = props => {
    return (
        <div className='delete-modal'>
            <div className='delete-modal-box'>
                <div>Delete Note?</div>
                <div className='delete-button-box'>
                    <Link className='delete-modal-button delete' to='../../' onClick={() => props.deleteNote(props.match.params.id)}>Delete</Link>
                    <Link className='delete-modal-button no' to={`../${props.match.params.id}`}>No</Link>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;