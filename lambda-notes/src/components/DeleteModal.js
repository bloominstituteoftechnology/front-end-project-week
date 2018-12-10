import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';

const ModalContainer = styled.div`
    height: 18rem;
    width: 53rem;
    border: 1px solid #AFAFAF;
    background-color: #FBFAFB;
    position: absolute;
    top: 17.5rem;
    left: -4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-weight: bold;
        margin-bottom: 3rem;
        text-align: center;
    }
`

const ButtonContainer = styled.div`
    width: 83%;
    display: flex;
    justify-content: space-evenly;
`

const ModalButton = styled.div`
    width: 19rem;
    height: 4.5rem;
    border: 1px solid #AFAFAF;
    background-color: #24B8BD;
    color: #EAF4F3;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DeleteModalButton = styled(ModalButton)`
    background-color: #CA001A;
`

const DeleteModal = props => {
    if(props.show) {
        return(
            <ModalContainer>
                <p>Are you sure you want to delete this?</p>
                <ButtonContainer>
                    <DeleteModalButton onClick={event => {
                        event.preventDefault();
                        props.deleteNote(props.note._id);
                        props.history.push('/');
                    }}>
                        Delete
                    </DeleteModalButton>
                    <ModalButton>No</ModalButton>
                </ButtonContainer>

            </ModalContainer>
    );
    } else {
        return <></>;
    }
}

export default connect(null, { deleteNote })(DeleteModal);