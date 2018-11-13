import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavBar = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    max-width: 300px;
    min-width: 300px;
    background-color: rgb(216, 216, 216);
    border-right: 1px solid rgb(175, 175, 175);
    color: rgb(74, 74, 74);
`;

const SiteName = styled.div`
    text-align: left;
    font-size: 24px;
    line-height: .95;
    padding: 0px 0px 25px 15px;
`;

const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const NavButton = styled.div`
    text-align: center;
    border: 1px solid rgb(150, 162, 162);
    color: white;
    background-color: rgb(54, 192, 195);
    border-radius: 3px;
    padding: 15px 25px;
    margin: 15px;
    cursor: pointer;
`;

const Navigation = () => {
    return (
        <NavBar>
            <SiteName>
                <h1>Lambda Notes!</h1>
            </SiteName>
            <NavLinks>
                <Link to="/" style={{ textDecoration: 'none'}} >
                    <NavButton>View Your Notes</NavButton>
                </Link>
                <Link to="/new-note" style={{ textDecoration: 'none'}} >
                    <NavButton>+ Create New Note</NavButton>
                </Link>
            </NavLinks>
        </NavBar>
    )
}

export default Navigation;