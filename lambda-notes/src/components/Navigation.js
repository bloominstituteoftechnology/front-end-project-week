import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationDiv = styled.div`
    width: 22rem;
    height: 100vh;
    border: 2px solid #AFAFAF;
    background-color: #D3D2D3;
    position: fixed;

    h1 {
        font-size: 3.5rem;
        margin-left: 1.2rem;
        margin-top: 1.5rem;
        font-weight: bold;
        color: #454849;
    }
`

const NavigationLink = styled(Link)`
    text-decoration: none;

     &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
     }
` 

const NavigationButton = styled.div`
    width: 19rem;
    height: 4.5rem;
    margin-left: 1.2rem;
    margin-top: 2rem;
    border: 1px solid #AFAFAF;
    background-color: #24B8BD;
    color: #EAF4F3;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

    .fa-plus {
        margin-right: 0.5rem;
        font-size: 1rem;
    }
`

const Navigation = () => {
    return(
        <NavigationDiv>
            <h1>Lambda Notes</h1>
            <NavigationLink exact to='/'>
                <NavigationButton>
                    <p>View Your Notes</p>
                </NavigationButton>
            </NavigationLink>
            <NavigationLink exact to='/add-note'>
                <NavigationButton>
                    <p className="fas fa-plus"></p>
                    <p>Create New Note</p>
                </NavigationButton>
            </NavigationLink>
        </NavigationDiv>
    );
}

export default Navigation;