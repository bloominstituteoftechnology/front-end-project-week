import React, { Component } from 'react';
import Note from './Note';
import styled from 'styled-components';


const NotesContainer = styled.div`
display: flex;
width: 100%;
height: 2000px;
background-color: #EEEEEE;
border: 1px solid blue;

`;

const ListContainer = styled.div`
width: 100%;
padding-left: 30%;`

const Notes = () => {
    return (
        <NotesContainer>
            <ListContainer>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </ListContainer>
        </NotesContainer>
    );
};

export default Notes;