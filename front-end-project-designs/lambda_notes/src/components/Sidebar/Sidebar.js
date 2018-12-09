import React from 'react';
import styled from 'styled-components'

const SidebarContainer = styled.div`
    background-color: #D3D2D3;
    height: 100%;
    max-width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #CAC9CA;
    border-right: 1px solid #CAC9CA;
`

const MainHeader = styled.h1`
    color: #414141;
`

const SidebarButton = styled.a`
    width: 80%;
    background-color: #24B8BD;
    color: #F3F9F9;
    padding: 8px 15px;
    margin: 12px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
`

const Sidebar = () => {
    return (
        <SidebarContainer>
            <MainHeader>Lambda Notes</MainHeader>
            <SidebarButton href="#">View Your Notes</SidebarButton>
            <SidebarButton href="#">+ Create New Note</SidebarButton>
        </SidebarContainer>
    )
}

export default Sidebar;