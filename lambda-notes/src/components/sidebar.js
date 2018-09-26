import React from "react";
import {Link } from 'react-router-dom'
import styled from 'styled-components'

const SideBarContainer = styled.div`
  width: 20%;
  min-height: 100vh;
  height: auto;
  background-color: #D2D1D2;
  text-align: left;
  padding-left: 2%;
`;

const SideBarH3 = styled.h3`
  background-color: #00BCBA;
  color: #FFFFFF;
  height: auto;
  width: 90%;
  display: inline-block;
  padding: 15px 5px;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  &: hover{
    cursor: pointer;
  }
}
`;

const SideBarH1 = styled.h1`
display: block;
font-size: 2em;
-webkit-margin-before: 0.67em;
-webkit-margin-after: 0.67em;
-webkit-margin-start: 0px;
-webkit-margin-end: 0px;
font-weight: bold;

`;

const SideBar = () => {
  return(
  <SideBarContainer>
    <SideBarH1>Lambda<br></br> School</SideBarH1>
    <Link to='/'>
    <SideBarH3>View Your Notes</SideBarH3>
    </Link>
 
    <Link to='/addnote'>
    <SideBarH3>+ Create New Note</SideBarH3>
    </Link>
  </SideBarContainer>
  )
};

export default SideBar;