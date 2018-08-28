import React from 'react';
import styled from 'styled-components';

const NotesContainer = styled.div`
display: flex;
width: 100%;
height: 500px;
background-color: #EEEEEE;

`;

const NoteContainer = styled.div`
margin-left: 500px;
display: flex;
width: 300px;

`


const ViewNote = props => {
    return (
        <NotesContainer>
            <NoteContainer>
                <div>edit</div>
                <div>delete</div>
                <h1>Note Name</h1>
                <p>Note Cotent. Like a lot of content. Like so much Content</p>
            </NoteContainer>
        </NotesContainer>
    );
}

export default ViewNote;