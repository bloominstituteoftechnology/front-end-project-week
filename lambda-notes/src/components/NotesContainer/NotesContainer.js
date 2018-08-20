import React from 'react';
import styled from 'styled-components';
import SideNav from '../SideBar/SideNav';

const Notes = styled.div `
display: inline-flex;
background: #f2f1f2;
height: 100vh;
width: 80%;
`


const NotesContainer = () => {
    return ( <Notes>
        <SideNav />
        <h1> Your Note</h1>

        
        </Notes> );
}
 
export default NotesContainer;