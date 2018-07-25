import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarContainerStyledDiv = styled.div`
    background-color: #D8D8D8;
    width: 220px;
`
const SideBarStyledHeading = styled.h1`
    font-size:36px;
`

const SideBarStyledButton = styled.button`
    background-color: #2BC1C4;
    color: white;
    width: 190px;
    height:45px;
    font-size:16px;
`


const SideBar = props => {
    return (
        <SideBarContainerStyledDiv>
            <SideBarStyledHeading>
                Lambda Notes
            </SideBarStyledHeading>
            <br />
            <Link to={"/"}>
                <SideBarStyledButton> View Your Notes </SideBarStyledButton>
            </Link>
            <br />
            <Link to={"/createNote"}>
                <SideBarStyledButton> + Create New Note </SideBarStyledButton>
            </Link>
            <br />
        </SideBarContainerStyledDiv>
    )
}

export default SideBar;