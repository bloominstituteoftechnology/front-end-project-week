import React from 'react'
import styled from 'styled-components'


const SideBarDiv = styled.div`
    width:20%;
    height: 100%;
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
`
const SideBarButton = styled.button`
    background-color:#2bc1c4;
    border: 1px solid #979797;
    height: 50px;
    margin: 10px 0px;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: bold;
    :hover{
        cursor: pointer;
    }
`
const SideBar = ()=>{
    return (
      <SideBarDiv>
        <SideBarHeader>Lambda Notes</SideBarHeader>
        <SideBarButton>View Your Notes</SideBarButton>
        <SideBarButton>+ Create New Notes</SideBarButton>
      </SideBarDiv>  
    )
}

export default SideBar