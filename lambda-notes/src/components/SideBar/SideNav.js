import React from 'react';
import styled from 'styled-components';

const Side = styled.div `
background: #d3d2d3;
width: 15%;
display: inline-block
`
const Header = styled.h1 `
color: #4a4c4e
`

const Button = styled.button `
background: #24b8bd;
border: 1px solid #cdcecf;
color: white;
font-weight: bold;
width: 90%;
margin-left: 5%;
height: 5%;

`


const SideNav = () => {
    return ( <Side>
        
        <Header> Lambda <br /> Notes</Header>
        <Button>View Your Notes</Button>
        <br />
        <Button>+ Create New Notes</Button>
        
        </Side> );
}
 
export default SideNav;