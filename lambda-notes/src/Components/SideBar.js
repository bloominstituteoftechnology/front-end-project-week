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


const SideBar = props => {
    return (
        <SideBarContainerStyledDiv>
            <SideBarStyledHeading>
                Lambda Notes
            </SideBarStyledHeading>
            <br />
            <Link to={"/"}>
                <button> View Your Notes </button>
            </Link>
            <br />
            <Link to={"/createNote"}>
                <button> + Create New Note </button>
            </Link>
            <br />
        </SideBarContainerStyledDiv>
    )
}

export default SideBar;