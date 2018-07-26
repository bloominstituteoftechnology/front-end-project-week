import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Notes.css';

const NoteTitle = styled(Link)`
    font-size: 24px;
    font-weight: 700px;
    justify-content: center;
    padding: 10px;
    font: Roboto Bold;
    display: flex;
    flex-flow: row;
`;

const Box = styled.div`
display: flex;
justify-content: flex-start;
flex-flow: column wrap;
border: 1px solid grey;
width: 170px;
height: 170px;
font-size: 16px;
background: #F3F3F3;
font: Raleway Medium;
color: #4A4A4A;
padding: 5px auto;
margin-left: 10px;
margin-top: 0px;
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