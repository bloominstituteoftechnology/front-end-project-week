import React from 'react';
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';

const Delete = styled.div`
position: absolute;
right: 25%;
left: 25%;
top: 25%;
bottom: 25%;
background: white;
border: 1px solid black;
height: 13rem;
`

const Header = styled.h4`
margin-left: 20%;
margin-top: 5%;
margin-bottom: 5%;
`

const Options = styled.div`
`

const DeleteButton = styled.button`
width: 35%;
margin-left: 10%;
height: 3rem;
background: red;
color: white;
font-weight: bold;
border: 1px solid #cdcecf;
`

const NoButton = styled.button`
width: 35%;
margin-left: 10%;
height: 3rem;
background: #24b8bd;
color: white;
font-weight: bold;
border: 1px solid #cdcecf;
`

const ConfirmDelete = (props) => {
    return (<Delete>

        <Header>Are you sure you want to delete this?</Header>

        <Options>
            <NavLink to="/" activeStyle={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}><DeleteButton onClick={props.delete}><NavLink to="/" activeStyle={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>Delete</NavLink></DeleteButton></NavLink>
            <NavLink to="/view/:id/" activeStyle={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}><NoButton>No</NoButton></NavLink>
        </Options>

    </Delete>);
}

export default ConfirmDelete;