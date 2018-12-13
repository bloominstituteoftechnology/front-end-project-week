import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const NavBarDiv= styled.div `
width: 25%;
display: flex;
display-direction: row;
flex-wrap: wrap;
height: 100%;
background-color: #D3D2D3;
padding: 10px;
`
const Button= styled.div `
width: 100%;
padding-top: 10px;
padding-bottom:10px;
padding-right:5%;
padding-left:5%;
margin-bottom: 15px;
background-color: #24B8BD;
display:flex;
font-weigth: bold;
color: white;
font-size: 16px;
`
const StyledLink= styled(Link)`
width: 100%;
padding-top: 10px;
padding-bottom:10px;
padding-right:5%;
padding-left:5%;
margin-bottom: 15px;
background-color: #24B8BD;
display:flex;
font-weigth: bolder;
color: white;
text-decoration: none;
text-align: center;
`
const H1 = styled.h1 `
font-size: 2.0rem
`
const NavBar= props =>{
    return(
        <NavBarDiv>
            <H1>Lambda Notes</H1>
            <StyledLink to='/'><Button onClick={()=>{window.location.reload(); }}>View Your Notes</Button></StyledLink>
            <StyledLink to ='/form/add'><Button>+ Create New Note</Button></StyledLink>
        </NavBarDiv>
    )
}
export default NavBar;