import React from 'react';
import styled from 'styled-components';

const DeleteModalBackground = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgb(30,30,30,0.4);
`;

const DeleteModalDiv = styled.div`
    width: 50%;
    border: 1px solid #888;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
`;

const ModalButton = styled.div`
    font-size: 1.6rem;
    font-weight: bold;
    width: 40%;
    height: 5vh;
    border: 1px solid darkgrey;
    border-radius: 5px;
    background: ${props=> props.primary ? "rgb(0, 187, 191)" : "rgb(218, 0, 0)"};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: white;
        border: 1px solid ${props=> props.primary ? "rgb(0, 187, 191)" : "rgb(218, 0, 0)"};
        color: ${props=> props.primary ? "rgb(0, 187, 191)" : "rgb(218, 0, 0)"};
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DeleteModal = (props) => {
    return(
        <DeleteModalBackground>
            <DeleteModalDiv>             
                <h2>Are you sure you want to delete this?</h2>
                <ButtonWrapper>
                    <ModalButton onClick={props.delete}>Delete</ModalButton>
                    <ModalButton primary onClick={props.closeForm}>No</ModalButton>
                </ButtonWrapper>
            </DeleteModalDiv>
        </DeleteModalBackground>
    )   
}

export default DeleteModal;