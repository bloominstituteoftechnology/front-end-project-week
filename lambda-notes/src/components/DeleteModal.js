import React from 'react';
import { Link } from 'react-router-dom';

const DeleteModal = (props) => {
    return(
        <div className='delete-view'>
            <div className='button-box'>
                <p>Are you sure you want to delete this?</p>
                <button 
                    className='delete-button'
                    onClick={(event) => props.deleteNote(event, props.match.params._id)}
                >
                    Delete
                </button>
                <Link to='/notes/:_id'><button className='button-style'>No</button></Link>
            </div>
        </div>
    );
}

export default DeleteModal;