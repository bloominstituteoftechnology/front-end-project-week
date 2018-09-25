import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import { StyledButton } from '../../styling/';

const DeleteBackground = Styled.div`
    z-index: 97;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    background-color: rgba(216, 216, 216, 0.75);
`;

const DeletePrompt = Styled.div`
    z-index: 98;
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 530px;
    height: 175px;
    margin-top: 170px;
    border: 1px solid #afafaf;
    border-radius: 2px;
    background-color: #ffffff;
`;

const DeleteHeader = Styled.h4`
    z-index: 99;
    margin: auto;
    font-size: 2rem;
`;

const ButtonContainer = Styled.div`
    z-index: 99;
    height: 70px;
    display: flex;
    justify-content: center;
`;

const DeleteModal = (props) => {
    return (
        <DeleteBackground>
            <DeletePrompt>
                <DeleteHeader>Are you sure you want to delete this?</DeleteHeader>
                <ButtonContainer>
                    <StyledButton buttonColor='red'>Delete</StyledButton>
                    <StyledButton buttonColor='aqua'>No</StyledButton>
                </ButtonContainer>
            </DeletePrompt>
        </DeleteBackground>
    );
};

DeleteModal.propTypes = {};

export default DeleteModal;
