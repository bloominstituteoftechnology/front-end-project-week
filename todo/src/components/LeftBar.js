import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './App.css';
import App from './App';
import NewNote from './NewNote';

const LeftBarDiv = styled.div`
    width: 26%;
    background-color: #D8D8D8;
    padding: 0px 1.5%;
    border-right: 2px solid #979797;
`;

const LeftBarH1 = styled.h1`
    color: 4A4A4A;
    font-size: 5.2rem;
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

const LeftBarButton = styled.div`
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
`;

const LeftBar = props => {
    return (
        <LeftBarDiv>
            <LeftBarH1>Lambda Notes</LeftBarH1>
            <Link exact to='/'><LeftBarButton>View Your Notes</LeftBarButton></Link>
            <Link to='/NewNote'><LeftBarButton>+ Create New Note</LeftBarButton></Link>
        </LeftBarDiv>
    )
}

export default LeftBar;