import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SideBarDiv = styled.div`
    width:20%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    border: 1px solid #b2b2b2;
    background-color: #D8D8D8
    padding: 2%;
    font-family: 'Open Sans', sans-serif;

`
const SideBarHeader = styled.h1`
    font-size: 40px;
    color: #4a4a4a;
    margin-bottom: 10px;
    font-weight: bold;
`
const SideBarButton = styled.button`
    background-color:#2bc1c4;
    width: 100%;
    border: 1px solid #979797;
    height: 50px;
    margin: 10px 0px;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: bold;
    text-decoration: none;
    :hover{
        cursor: pointer;
    }
`
const SideBar = (props)=>{
  
    return (
      <SideBarDiv>
        <SideBarHeader>Lambda Notes</SideBarHeader>
            <NavLink to='/'><SideBarButton onClick={props.handleClick}>View Your Notes</SideBarButton></NavLink>
            <NavLink to='/create'><SideBarButton onClick={props.handleClick}>+ Create New Notes</SideBarButton></NavLink>
            <NavLink to='/'><SideBarButton onClick={props.handleLogout}>Log Out</SideBarButton></NavLink>
      </SideBarDiv>  
    )
}

export default SideBar