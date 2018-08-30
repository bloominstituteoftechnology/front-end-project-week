import React from 'react';
import { Link } from 'react-router-dom';

const DeleteModal = (props) => {
    return(
        <div className='delete-view'>
            <div>
                <p>Are you sure you want to delete this?</p>
                <button 
                    className='modal-button'
                    onClick={this.props.deleteNote}
                >
                    Delete
                </button>
                <Link to='/notes/:_id'><button className='modal-button'>No</button></Link>
            </div>
        </div>
    );
}

export default DeleteModal;