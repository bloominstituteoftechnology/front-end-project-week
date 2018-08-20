import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



const SideNavigation = styled.div`

    display: flex;
    flex-direction: column;
    position: sticky;
    height: 100vh;
    top: 0;
    border: 1px solid blue;
    min-width: 25%;
    align-items: center;


`

const SideNav = () => {
    return(
        <SideNavigation>
            <Link to='/notes'>View your notes</Link>
            <Link to='/add-note'>+ Create New Note</Link>
        </SideNavigation>
    )
}

export default SideNav;