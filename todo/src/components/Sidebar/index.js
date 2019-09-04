import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../App/index.css';

const SideBarDiv = styled.div`
    background-color: #D8D8D8;
    padding: 0px 1.5%;
    border-right: 2px solid #979797;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    width: 25%;
    justify-content: flex-start;
`;

const SideBarH1 = styled.h1`
    color: 4A4A4A;
    font-size: 5rem;
    text-align: left;
    margin: 0px;
    padding: 0px;
    padding-top: 30px;
    opacity: 0.7;
    font-weight: 650;
    line-height: 4.4rem;
    padding-bottom: 15px;
    margin-bottom: 30px;
`;

const SideBarButton = styled.div`
    height: 62px;
    border: 2px solid #929898;
    background-color: #2BC1C4;
    color: #FFFFFF;
    margin-bottom: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 600;
    cursor: pointer;
    width: 250px;
    border-radius: 5px;
`;

const SideBar = () => {
    return (
        <SideBarDiv>
            <SideBarH1>Lambda Notes</SideBarH1>
            <Link to='/notes'><SideBarButton>View Your Notes</SideBarButton></Link>
            <Link to='/create'><SideBarButton>+ Create New Note</SideBarButton></Link>
        </SideBarDiv>
    )
}

export default SideBar;