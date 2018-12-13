import React from "react";
import {Link}from "react-router-dom";
import styled from 'styled-components';
const NoteDiv= styled.div `
background-color: white;
padding: 5px;
width: 30%
border:  solid 1px;
margin-bottom: 10px;
font-size: 12px;
display: flex;
flex-wrap: wrap;
text-align: left;
`
const StyledLink = styled(Link) `
font-size: 16px;
font-weigth: bolder;
text-decoration: none;
color: black;
`
const TextDiv= styled.div `
font-size: 12px;
width: 100%;
padding-top: 10px;
border-top: black solid 1px;
`
const NoteView = props =>{
    console.log(props)
    return(
        <NoteDiv>
            <StyledLink to = {`/notes/${props.note._id}`}>Title: {props.note.title}</StyledLink>
            
            <TextDiv>{props.note.textBody}</TextDiv>
        </NoteDiv>
    )
}
export default NoteView