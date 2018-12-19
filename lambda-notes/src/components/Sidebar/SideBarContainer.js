import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
    width: 16.8%;
    height: 100%;
    padding: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    color: #4b4b4b;
    background: #d3d3d3;
`;

const H1 = styled.h1`
    width: 100%;
    margin: 0;
    font-size: 36px;
    // border: 1px solid blue;
`;

const BarButtonBox = styled.div`
    width: 100%;
    height: auto;
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // border: 1px solid pink;
`;

const BarButton = styled.button`
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    color: white;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    background-color: #00b8b8;
    border: 1px solid #4b4b4b;
`;

const SideBarContainer = props => {
    return(
        <Body> 
            <H1>Lambda<br/>Notes</H1>
            <BarButtonBox>
                <BarButton>View Your Notes</BarButton>
                <BarButton>+ Create New Note</BarButton>
            </BarButtonBox>
        </Body>
    )
}

export default SideBarContainer;