//rendered in SideBar component
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Button = styled.div `
width: 150px;
background-color: #24B8BD;
padding-left: 22px;
padding-right: 22px;
padding-top: 9px;
padding-bottom: 9px;
font-size: 12px;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bold;
color: white;
text-align: center;
margin-top: 13px;
margin-left: 12px;

`

const NewNoteButton= props => {

    return (
    <Button>
        <Link to='/NewNote'>
          New Note
         </Link>
    </Button>
    )
}
export default NewNoteButton;