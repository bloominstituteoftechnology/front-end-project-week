import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 223px;
    max-width: 223px;
    background-color: #D3D2D3;
    padding: 1.8rem 1.5rem;
    line-height: .95;
    font-weight: bold;
    font-size: 3.4rem;
    border-top: 1px solid gray;
    border-left: 1px solid gray;
    border-bottom: 1px solid gray;
`

const NavButton = styled.button`
    width: 100%;
    height: 4.3rem;
    background-color: #25B7BD;
    margin-top: 2.5rem;
    color: #FFF;
    font-size: 1.5rem;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`

const SecondNavButton = styled(NavButton)`
    margin-top: 1.5rem;
`

export default function Navigation() {
    return (
        <NavDiv>
            <h1>Lambda Notes</h1>
            <Link to="/">
                <NavButton>
                    View Your Notes
                </NavButton>
            </Link>
            <Link to="/create">
                <SecondNavButton>
                    + Create New Note
                </SecondNavButton>
            </Link>
        </NavDiv>
    );
}