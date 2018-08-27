import React from 'react';
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
width: 200%;
height: 7%;
display: flex;
justify-content: center;
align-items: center;
background-color: lightblue;
`;

const SideBar = () => {
    return (
        <Sidebar>
            <div className='sidebar-container'>
                <h1>Lambda<br />Notes</h1>
                <NavButton>View Your Notes</NavButton><br />
                <NavButton>+ Create New Note</NavButton>
            </div>
        </Sidebar>
    )
}

export default SideBar;