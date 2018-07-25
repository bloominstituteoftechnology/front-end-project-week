import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarStyledHeading = styled.h1`
    font-size:36px;
`

const SideBar = props => {
    return (
        <div>
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
        </div>
    )
}

export default SideBar;