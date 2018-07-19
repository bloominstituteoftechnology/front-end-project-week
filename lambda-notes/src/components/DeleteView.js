import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import  SideBar from './SideBar';
import  NoteCard from './NoteCard';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Onecont = styled.div`

    background-color: #F3F3F3;
    height:100vh;
    width:660px;
    border: solid 1px #979797
`;

const List = styled.div`

    display: flex;
    opacity: 0.3;
`;
const Pop = styled.div`
border: solid 1px #979797
display: flex
opacity: 100%;
position: fixed;
height: 180px;
width: 525px;

z-index: 1;
top: 150px;
left: 650px;

background-color: white;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;
const StyledLink = styled(Link)`
text-decoration: none;
  color: white;
`

const Button = styled.button`
margin-left: 15px;
text-decoration: none;
color: white;
display: flex;
justify-content: center;
align-items: center;
background-color: #2BC1C4;
width: 185px;
height: 35px;
margin-bottom: 15px;
`;
const ButtonD = styled.button`
margin-left: 15px;
text-decoration: none;
color: white;
display: flex;
justify-content: center;
align-items: center;
background-color: Red;
width: 185px;
height: 35px;
margin-bottom: 15px;
`;
const ButtonTxt = styled.text`
width: 100%
`;

 const Delete = () => (
     <div>
     <Pop><ButtonTxt>Are you sure you want to delete this?</ButtonTxt>
     
            <ButtonD> <StyledLink to="/">Delete</StyledLink>
            </ButtonD>
            <Button> <StyledLink to="/">No</StyledLink>
            </Button>
     </Pop>
    <List > 
        
    {/* <SideBar /> */}
    <Onecont>
        
    <div>Note Name</div> 
    <p>Lorem Ipsum</p>
    <button> <Link to="edit">edit</Link>
            </button>
            <button> <Link to="/delete">delete</Link>
            </button>
    </Onecont>
        </List>
        </div>
        );

export default Delete






 