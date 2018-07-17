import React from 'react';

const ModalContainer = props => {
    // Displays modal depending on the state
    return (
        <div className='modal' style={props.modal ? { display: 'block' } : null}>

            <div className="modal-content">
                <p className='modal-text'>Are you sure you want to delete this?</p>

                <div className='modal-buttons'>
                    <button onClick={props.deleteNote} className='delete-button'>Delete</button>
                    <button onClick={props.toggleModal} className='cancel-button'>No</button>
                </div>

            </div>

        </div>
    );
}

export default ModalContainer;