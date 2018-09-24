import React, { Component } from 'react';
import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = Styled.div`
    margin: 1%;
    width: 20%;
    height: 300px;
    max-height: 300px;
    overflow: hidden;
    border: 1px solid #b6b6b6;
`;

const Header = Styled.header`
    padding: 1%;
    border-bottom: 2px solid #b0b0b0;
    margin: 0 4% 0 4%;
    font-weight: bold;
    color: black;
`;

const Content = Styled.div`
    padding: 4%;
    color: black;
`;

function Note(props) {
    return (
        <Container>
            <NavLink to={`/notes/${props.note.id}`} >
                <Header><h1>{props.note.title}</h1></Header>
                <Content><p>{props.note.textBody}</p></Content>
            </NavLink>
        </Container>
    );
};

export default Note;