import React from 'react';
import {Link} from 'react-router-dom';

import './notes.css';

const DeleteModal = props => {
    const ID = props.match.params.id;
    return (
        <div className='delete-modal'>
            <div className='delete-modal-box'>
                <div>Delete Note?</div>
                <div className='delete-button-box'>
                    <Link className='delete-modal-button delete' to='../../' onClick={() => props.deleteNote(ID)}>Delete</Link>
                    <Link className='delete-modal-button no' to={`../${ID}`}>No</Link>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;