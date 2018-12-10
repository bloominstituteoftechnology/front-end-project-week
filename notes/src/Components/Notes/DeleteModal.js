import React from 'react';
import {Link} from 'react-router-dom';

const DeleteModal = props => {
    return (
        <div className = 'deleteModal'>
            <div className = 'deleteModalBox'>
                <div>Are you sure you want to delete this?</div>
                <div className = 'deleteModalLinks'>
                    <Link className='deleteButton' to='../../' onClick={() => props.deleteNote(props.match.params.id)}>
                        Delete
                    </Link>
                    <Link className='noButton' to={`../${props.match.params.id}`}>
                        No
                    </Link>
                </div>
        </div>
    </div>
    )
}

export default DeleteModal;