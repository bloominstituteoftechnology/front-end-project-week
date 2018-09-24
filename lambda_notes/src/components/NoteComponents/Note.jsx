import React, { Component } from 'react';
import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = Styled.div`
    margin: 1%;
    width: 20%;
    max-height: 300px;
    overflow: hidden;
    border: 1px solid black;
`

function Note(props) {
    return (
        <Container>
            <NavLink to={`/notes/${props.note.id}`} >
                <h1>{props.note.title}</h1>

                <p>{props.note.textBody}</p>
            </NavLink>
        </Container>
    );
};

export default Note;