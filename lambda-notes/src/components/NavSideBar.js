import React from 'react';
import styled from 'styled-components';

const NavSideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 7% 0 7%;
`;

const NavSideBarHeader = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 3.2rem;
    line-height: .9;
    margin-bottom: 20px;
    color: #424141
`;

const NavSideBarButtons = styled.div`
    display: flex;
    flex-direction: column;
    
    button{
        font-size: 1.6rem;
        height: 40px;
        margin-bottom: 15px;
        color: white;
        background-color: #24b8bd;
        border: 2px solid #56aaad;
        cursor: pointer;
        outline-style: none;

        &:hover{
            color: #24b8bd;
            background-color: white;
            border: 2px solid #56aaad;
        }
    }
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
            <NavSideBarHeader>
                <h1>Lambda</h1>
                <h1>Notes</h1>
            </NavSideBarHeader>
            <NavSideBarButtons>
                <button onClick={appHome}>View Your Notes</button>
                <button onClick={appCreateNote}>+ Create New Note</button>
            </NavSideBarButtons>
        </NavSideBarContainer>
    )
}

export default NavSideBar;