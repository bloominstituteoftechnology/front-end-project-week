import React from 'react';

import { DeleteContainer, DeleteModule, ButtonsContainer, StyledButton } from '../styles';

const DeleteConfirm = ({setShowDelete, deleteNote, history, id}) => {
    return (
        <DeleteContainer>
            <DeleteModule>
                <h3>Are you sure you want to delete?</h3>
                <ButtonsContainer display="true">
                    <StyledButton
                        onClick={e => {
                            e.preventDefault();
                            setShowDelete(false);
                        }}
                    >Close</StyledButton>
                    <StyledButton
                        active="true"
                        onClick={e => {
                            e.preventDefault();
                            deleteNote(id)
                            setShowDelete(false);
                            history.push('/');
                        }}
                    >DELETE</StyledButton>
                </ButtonsContainer>
            </DeleteModule>
        </DeleteContainer>
    );
}

export default DeleteConfirm;

