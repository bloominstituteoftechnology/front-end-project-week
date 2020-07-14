import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const SideBar = () => {
    return(
        <SideBarWrap>
            <H1>Lambda Notes</H1>
            <NavLink to='/list-view'>
                <Button>View Your Notes</Button>
            </NavLink>
            <NavLink to='/create-new'>
                <Button>+ Create New Note</Button>
            </NavLink>
        </SideBarWrap>
    )
}

const SideBarWrap = styled.div`
    margin: 0 5%;
`;

const H1 = styled.h1`
    margin: 17px 0;
    line-height: 32px;
`;

const Button = styled.button`
    color:white;
    background-color: #2BC1C4;
    width: 98%;
    height: 45px;
    font-weight:bold;
    font-size:1rem;
    margin:7px 0;
    border: 1px solid grey;
`;

export default SideBar;