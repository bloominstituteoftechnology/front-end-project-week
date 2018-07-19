import React from 'react';
import { Link } from 'react-router-dom'

const DeleteModal = props => {
    return (
        <div className="DeleteModal-container">
            <div className="DeleteModal-modal">
                <div className="DeleteModal-header">
                    <h2>Are you sure you want to delete this?</h2>
                </div>
                <div className="DeleteModal-buttons">
                    <Link to="/"><button onClick={() => {
                        props.handleDelete(props.id);
                        setTimeout(window.location.reload(), 3000);
                    }}>Delete</button></Link>
                    <button onClick={props.toggleDelete}>No</button>
                </div>
            </div>
        </div>
    );

};

export default DeleteModal;