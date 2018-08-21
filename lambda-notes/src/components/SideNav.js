import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



const SideNavigation = styled.div`

    display: flex;
    flex-direction: column;
    position: sticky;
    height: 100vh;
    top: 0;
    border-right: 1px solid darkgray;
    min-width: 25%;
    max-width: 25%;
    align-items: center;
    padding: 10px;
    background: #C0C0C0;

    > a {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid gray;
        width: 100%;
        margin: 10px;
        height: 35px;
        text-decoration: none;
        background: #20B2AA;
        font-weight: bold;
        color: white;
        font-size: 1.4rem;
    }

    > h1 {
        font-weight: bold;
        font-size: 3.4rem;
    }


`

const SideNav = () => {
    return(
        <SideNavigation>
            <h1>Lambda Notes</h1>
            <Link to='/notes'>View your notes</Link>
            <Link to='/add-note'>+ Create New Note</Link>
        </SideNavigation>
    )
}

export default SideNav;