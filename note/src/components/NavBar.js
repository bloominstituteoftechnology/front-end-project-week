import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';

const NavBarContainer = styled.div`
    border: 1px solid gray;
    width: 20%;
    height: 100vh;
    background: #D3D2D3;
    position: fixed;
    align-items: center;
    text-align: center;
`;

const NavButton = styled.button`
    width: 90%;
    height: 40px;
    margin-bottom: 25px;
    border: 1px solid gray;
    background: #24B8BD;
    color: white;
    font-weight: bold;
    font-size: 14px;
`;

const headers = [
    { label: 'Title', key: 'title'},
    { label: 'Text Content', key: 'textBody'},
    { label: 'ID', key: '_id'}
]

const NavBar = props => {
    if (props.notes.length < 1 || props.notes === undefined ){
        return (
        <div>
            <h1 style={{textAlign:'center'}}>Loading the Note, Please Wait</h1>
            <h3 style={{textAlign:'center'}}>(If it unable to load, the serve are down)</h3>
        </div>
        )
    }
    else {
        console.log(props)
        return (
            <NavBarContainer>
                <h1>Lambda Notes</h1>
                <Link to ='/'>
                <NavButton>View your Notes</NavButton>
                </Link>

                <Link to='/new'>
                <NavButton>+ Create New Note</NavButton>
                </Link>
                <CSVLink data={props.notes} headers={headers} style={{textDecoration: 'none'}}>
                    <NavButton>Download The Notes as CSV</NavButton>
                </CSVLink>
                <NavButton>Logout</NavButton>
            </NavBarContainer>
        )
    }
}

export default NavBar;