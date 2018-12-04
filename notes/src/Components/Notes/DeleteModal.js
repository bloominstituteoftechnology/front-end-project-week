import React from 'react';
import {Link} from 'react-router-dom';

const DeleteModal = props => {
    return (
        <div>
                <div>Are you sure you want to delete this?</div>
                <div>
                    <Link className='delete-modal-button delete' to='../../' onClick={() => props.deleteNote(props.match.params.id)}>
                        Delete
                    </Link>
                    <Link className='delete-modal-button no' to={`../${props.match.params.id}`}>
                        No
                    </Link>
                </div>
        </div>
    )
}

export default DeleteModal;