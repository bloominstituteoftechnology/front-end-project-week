import React from 'react';
import styled from 'styled-components';

const NavSideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    border: 1px solid black;
`;

const NavSideBar = props=>{

    function appHome(){
        props.history.push('/');
    }

    function appCreateNote(){
        props.history.push('/create-note');
    }

    return(
        <NavSideBarContainer>
            <h1>Lambda Notes</h1>
            <button onClick={appHome}>View Your Notes</button>
            <button onClick={appCreateNote}>+Create New Note</button>
        </NavSideBarContainer>
    )
}

export default NavSideBar;