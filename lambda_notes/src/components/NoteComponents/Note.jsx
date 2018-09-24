import React, { Component } from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    margin: 1%;
    border: 1px solid black;
`

function Note(props) {
    return (
        <Container>
            <h1>{props.note.title}</h1>

            <p>{props.note.textBody}</p>
        </Container>
        
    );
};

export default Note;