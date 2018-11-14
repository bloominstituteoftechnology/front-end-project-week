import React from 'react';
import styled from 'styled-components';
import './App.css';

const MainContainerDiv = styled.div`
    width: 75%;
    background-color: #F3F3F3;
    padding: 0px 7%;
`;

const MainContainerH3 = styled.h3`
    color: 4A4A4A;
    font-size: 2.0rem;
    text-align: left;
    margin: 0px;
`;

const MainContainer = props => {
    return (
        <MainContainerDiv>
            <MainContainerH3>Lambda Notes</MainContainerH3>
        </MainContainerDiv>
    )
}

export default MainContainer;