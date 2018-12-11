import React, { Component } from 'react';

import { DeleteContainer, DeleteModule, ButtonsContainer, StyledButton } from '../../styles';

class DeleteConfirm extends Component {
    render() {
        return (
            <DeleteContainer>
                <DeleteModule>
                    <h3>Are you sure you want to delete?</h3>
                    <ButtonsContainer display="true">
                        <StyledButton
                            onClick={e => {
                                e.preventDefault();
                                this.props.setShowDelete(false);
                            }}
                        >Close</StyledButton>
                        <StyledButton
                            active="true"
                            onClick={e => {
                                e.preventDefault();
                                this.props.deleteNote(this.props.id)
                                this.props.setShowDelete(false);
                                this.props.history.push('/app');
                            }}
                        >DELETE</StyledButton>
                    </ButtonsContainer>
                </DeleteModule>
            </DeleteContainer>
        );
    }
}

export default DeleteConfirm;

