import React from 'react';
import styled from 'styled-components';
import SideNav from '../SideBar/SideNav';
import {Route, NavLink} from 'react-router-dom';
import Note from './Note';

const Notes = styled.div `
display: inline-flex;
background: #f2f1f2;
height: 759px;
max-height: 100vh;
width: 100%;
`


const NotesContainer = (props) => {
    console.log(props)
    return ( <Notes>
        <Route path='/' component={SideNav} />
        <Note note={props.note} />

        
        </Notes> );
}
 
export default NotesContainer;