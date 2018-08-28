import React, { Component } from 'react';
import Note from './Note';
import styled from 'styled-components';


const NotesContainer = styled.div`
display: flex;
width: 100%;
height: 500px;
background-color: #EEEEEE;

`;

const List = styled.div`
width: 100%;
display: flex;
padding-left: 30%;`

const Notes = () => {
    return (
        <NotesContainer>
            <List>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </List>
        </NotesContainer>
    );
};

export default Notes;