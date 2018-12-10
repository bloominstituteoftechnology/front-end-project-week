import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions'

import { DeleteContainer, DeleteModule, ButtonsContainer, StyledButton } from '../styles';


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
                                this.props.history.push('/');
                            }}
                        >DELETE</StyledButton>
                    </ButtonsContainer>
                </DeleteModule>
            </DeleteContainer>
        );
    }
}

const mapStateToProps = state => {
    const { activeNote } = state;
    return {
        id: activeNote.id
    };
}

export default connect(mapStateToProps, {deleteNote})(DeleteConfirm);

