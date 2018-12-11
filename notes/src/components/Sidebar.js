import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
    background: #D3D2D3;
    padding: 25px 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100%;
    width: 200px;
`;
const NavButton = styled(Link)`
    background: #25B7BD;
    border: 1px solid #B7B7B7;
    color: white;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 10px;
    margin-bottom: 15px;
    width: 175px;
    text-align: center;
`;
const StyledHeader = styled.h1`
    font-weight: bold;
    font-size: 30px;
    padding-bottom: 30px;
`;

const Sidebar = props => {
    return (
        <SidebarWrapper>
            <StyledHeader>Lambda <br></br> Notes</StyledHeader>
            <NavButton to="/">View Your Notes</NavButton>
            <NavButton to="/createnewnote">+ Create New Note</NavButton>
        </SidebarWrapper>
    )
}

export default Sidebar;