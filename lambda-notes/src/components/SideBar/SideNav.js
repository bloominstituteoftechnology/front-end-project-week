import React from 'react';
import styled from 'styled-components';
import { Route, NavLink, Link } from 'react-router-dom';

const Side = styled.div`
// background: #d3d2d3;
// width: 15%;
// display: inline-block
`
const Header = styled.h1`
// color: #4a4c4e
`

const Button = styled.button`
// background: #24b8bd;
// border: 1px solid #cdcecf;
// color: white;
// font-weight: bold;
// width: 90%;
// margin-left: 5%;
// height: 5%;
// margin-top: 15%;
`


const SideNav = () => {
    return (<Side className='col-2'>

        <Header> Lambda <br /> Notes</Header>
        <NavLink to="/"><Button>View Your Notes</Button></NavLink>
        <br />
        <NavLink to="/create"><Button>+ Create New Notes</Button></NavLink>

    </Side>);
}

export default SideNav;