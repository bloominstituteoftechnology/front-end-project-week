import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const NavBar = styled.nav`
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 40px;
    
`
const Link = styled(NavLink)`
    margin-right: 5px;
    color: black;
`
const NoteNav = (props) =>{
return(
    <NavBar>    
        <Link to = {`/delete/${props.id}`}>delete</Link>
        <Link to={`/edit/${props.id}`}>edit</Link>
    </NavBar>
)
}

export default NoteNav