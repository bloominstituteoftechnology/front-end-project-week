import React from 'react';
import { ModalWrapper, ModalContent, ModalButtonsContainer, ModalDeleteButton, ModalCancelButton } from '../ReusableComponents/Modal';
const ModalContainer = props => {
    // Displays modal depending on the state
    return (
        <ModalWrapper style={props.modal ? { display: 'block' } : null}>

            <ModalContent>
                
                <p>Are you sure you want to delete this?</p>

                <ModalButtonsContainer>
                    <ModalDeleteButton onClick={props.deleteNote} className='delete-button'>Delete</ModalDeleteButton>
                    <ModalCancelButton onClick={props.toggleModal} className='cancel-button'>No</ModalCancelButton>
                </ModalButtonsContainer>

            </ModalContent>

        </ModalWrapper>
    );
}

export default ModalContainer;