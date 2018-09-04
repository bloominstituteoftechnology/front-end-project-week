import React from 'react';
import { Link } from 'react-router-dom';

const DeleteModal = (props) => {
    return(
        <div className='delete-view'>
            <div className='button-box'>
                <p>Are you sure you want to delete this?</p>
                <div className='modal-buttons'>
                    <button 
                        className='delete-button'
                        onClick={(event) => props.deleteNote(event, props.match.params._id, props.history.push)}
                    >
                        Delete
                    </button>
                    <Link to='/notes/:_id'><button className='no-button'>No</button></Link>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;