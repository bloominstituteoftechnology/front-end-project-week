import React from 'react';
import { Link } from 'react-router-dom';
// import Search from './Search';
import styled from 'styled-components';
import './Sidebar.css';

const SideButton = styled(Link)`
    background-color: #2BC1C4;
    color: #FFFFFF;
    font-size: 18px;
    width: 87.5%;
    height: 50px;
    margin: 10px;
    border: 1px solid grey;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="column">
            <h1 className="title-header">Lambda Notes</h1>
            <SideButton to="/">View Your Notes</SideButton>
            <SideButton to="/notes/NewNote">+ Create New Note</SideButton>
            </div>
            </div>
    );
};

export default Sidebar;