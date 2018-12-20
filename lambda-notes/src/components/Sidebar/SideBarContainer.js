import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const H1 = styled.h1`
    width: 100%;
    margin: 0;
    font-size: 36px;
`;

const SideBarContainer = () => {
    return(
        <div className="bar-body"> 
            <H1>Lambda<br/>Notes</H1>
            <div className="button-box">
                <Link to='/' className='styled-button'>View Your Notes</Link>
                <Link to='/creator-form' className='styled-button'>+ Create New Note</Link>
            </div>
        </div>
    );
}

export default SideBarContainer;