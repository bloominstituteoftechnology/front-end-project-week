import React from 'react';
import { DeleteModalBackground, ModalButtons, DeleteModalDiv, ButtonWrapper } from './StyledComponents';

const DeleteModal = (props) => {
    return(
        <DeleteModalBackground>
            <DeleteModalDiv>             
                <h2>Are you sure you want to delete this?</h2>
                <ButtonWrapper>
                    <ModalButtons onClick={props.delete}>Delete</ModalButtons>
                    <ModalButtons primary onClick={props.closeForm}>No</ModalButtons>
                </ButtonWrapper>
            </DeleteModalDiv>
        </DeleteModalBackground>
    )   
}

export default DeleteModal;