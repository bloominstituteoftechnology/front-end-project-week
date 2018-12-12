import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    background: #D3D2D3;
    overflow-x: hidden;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
const SearchInput = styled.input`
    border: 2px solid lightgrey;
    font-size: 14px;
    border-radius: 5px;
    padding: 10px;
`;

const Sidebar = props => {
    return (
        <SidebarWrapper>
            <StyledHeader>Lambda <br></br> Notes</StyledHeader>
            <NavButton to="/">View Your Notes</NavButton>
            <NavButton to="/createnewnote">+ Create New Note</NavButton>
            <SearchInput type="search" placeholder="Search..." onKeyDown={props.searchNotes} />
        </SidebarWrapper>
    )
}

export default Sidebar;