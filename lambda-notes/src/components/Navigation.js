import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { CSVLink } from 'react-csv';
import { connect } from 'react-redux';
import { Headers } from '../actions';

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

const DownloadLink = styled(CSVLink)`
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

    .fa-plus, .fa-download {
        margin-right: 0.5rem;
        font-size: 1rem;
    }
`

const LogOutButton = styled(NavigationButton)`
    margin-top: 5rem;
`

const Navigation = props => {
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
            <DownloadLink data={props.notes} filename={`lambda-notes.csv`} headers={props.Headers}>
                <NavigationButton>
                    <p className="fas fa-download"></p>
                    <p>Download Notes</p>
                </NavigationButton>
            </DownloadLink>
            <LogOutButton onClick={() => {
                localStorage.removeItem('lambdanotes-username');
                window.location.reload();
            }}>
                    <p>Log Out</p>
            </LogOutButton>
        </NavigationDiv>
    );
}

export default withRouter(
    connect(null, { Headers })(Navigation)
);