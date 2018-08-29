import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';


const NoteContainer = styled.div`
margin 20px;
border: 1px solid black;
background-color: white;
width: 200px;
height: 150px;
`

function SingleNote({ note }) {
    const { tags, title, textBody } = note;
    return (
        <Route path='/view-note' component={
            <NoteContainer>
                <div className='headline'>{note.title}</div>
                <div className='content'>{note.textBody}</div>
            </NoteContainer>
        } />
    );
}

export default SingleNote;