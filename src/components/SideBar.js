import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.div`
    background: #D8D8D8;
    border-right: 1px solid #a6a6a6;
    width: 22rem;
    padding-left:1.5rem;
    padding-top: 1.5rem;
    height: 100vh;
`

const Header = styled.p`
    margin: 0;
    padding: 0;
    font-size: 3.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    line-height: 100%;
`
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    letter-spacing: 0.65px;
    width: 190px;
    height: 43px;
    font-size: 1.4rem;
    font-family: 'Raleway', sans-serif;
    margin-top: 2.1rem;
    color: white;
    background: #24b8bd;
    border: 1px solid rgb(163, 170, 171);
    cursor: pointer;
`

const SideBar = () => {
    return (
        <Nav>
            <Header>Lambda</Header>
            <Header>Notes</Header>
            <Link to='/'>
                <Button>View Your Notes</Button>
            </Link>
            <Link to='/create'>
                <Button>+ Create New Note</Button>
            </Link>
        </Nav>
      );
}
 
export default SideBar;