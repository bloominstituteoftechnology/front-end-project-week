import React, { Component } from 'react'
import styled from 'react-emotion'

const NavBar = props => {
    return (
        <Header>
            <h1>Lambda Notes</h1>
            <div>View Notes</div>
            <div>Create New Notes</div>
        </Header>
    )
}
export default NavBar

const Header = styled('header')`
height: 100%;
width: 160px;
position:fixed;
z-index:1;
top:0;
left:0;
background-color: #111;
overflow-x:hidden;
padding-top: 20px;
`
