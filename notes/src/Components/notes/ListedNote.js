import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Notes.css';

const NoteTitle = styled(Link)`
    font-size: 24px;
    font-weight: 700px;
    justify-content: center;
    font: Roboto Bold;
    display: flex;
    flex-flow: row;
    text-decoration: none;
    color: black;
    padding: 5px;
    margin: 5px auto;
    border-bottom: 1px solid grey;
`;

const Box = styled.div`
display: flex;
justify-content: flex-start;
flex-flow: column wrap;
border: 1px solid grey;
width: 165px;
height: 165px;
font-size: 16px;
background: #F3F3F3;
font: Raleway Medium;
color: #4A4A4A;
padding: 3px auto;
background: 
margin-top: 5px;
margin-bottom: 5px;
`;

const NoteContainer = styled.div`
display: flex;
height: 99%;
font: Raleway Medium;
color: #4A4A4A;
flex-flow: row wrap;
`;

const ListedNote = ({ title, textBody, _id }) => {
    return (
        <Box>
         <NoteTitle to={`/note/get/${_id}`}>{title}</NoteTitle>
            {textBody}</Box>
    );
};

export default ListedNote;