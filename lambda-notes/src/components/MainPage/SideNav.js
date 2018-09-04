import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Sidebar = styled.div`
padding: 30px;
width: 20%;
height: 100%;
display: flex;
justify-content:left;
position: fixed;
background-color: lightgray;
`;

const NavButton = styled.div`
width: 90%;
height: 7%;
display: flex;
justify-content: center;
align-items: center;
background-color: lightblue;
color: white;
text-decoration: none;
`;

const SideBar = () => {
    return (
        <Sidebar>
            <div className='sidebar-container'>
                <h1>Lambda<br />Notes</h1>
                <NavButton>
                    <Link to='/'>View Your Notes</Link>
                </NavButton><br />
                <NavButton>
                    <Link to='/create-note'>+ Create New Note</Link>
                </NavButton>
            </div>
        </Sidebar>
    )
}

export default SideBar;