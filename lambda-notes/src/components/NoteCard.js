import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Notecont = styled.div`

    background-color: #F3F3F3;
    height:100vh;
    width:660px;
    border: solid 1px #979797
`;
const Notebod = styled.div`
display: flex;
    justify-content: space-around; 
`;
const SmallNote = styled.div`

    background-color: white;
    height:190px;
    width:190px;
    border: solid 1px #979797
`;
const StyledLink = styled(Link)`
text-decoration: none;
  color: black;
  
`
const NoteTitle = styled.h2`
display: flex;
    justify-content: flex-start;
    margin-left: 15px;
    margin-right: 15px;
    
    border-bottom: solid 2px #000;
    
    padding-bottom: 3px;
    color: #4A4A4A;
`
const NoteBod = styled.p`
display: flex;
    justify-content: flex-start;
    margin-left: 15px;
    color: #4A4A4A;
  
`


 const NoteCard = () => (
     <Notecont>
      <div>Your Notes:</div>    
    <Notebod className = 'Note'>
    
    <StyledLink to="/note"> <SmallNote>
    <NoteTitle>Note Title</NoteTitle>
    <NoteBod>Lorem Ipsum</NoteBod>
      </SmallNote> </StyledLink>
      <StyledLink to="/note"> <SmallNote>
    <NoteTitle>Note Title</NoteTitle>
    <NoteBod>Lorem Ipsum</NoteBod>
      </SmallNote> </StyledLink> 
      <StyledLink to="/note"> <SmallNote>
    <NoteTitle>Note Title</NoteTitle>
    <NoteBod>Lorem Ipsum</NoteBod>
      </SmallNote> </StyledLink>
 </Notebod>
 </Notecont>
 )
 ;

export default NoteCard