import React, { Component, Fragment } from 'react';
import Styled from 'styled-components';
import { Card, CardImage, CardBody, CardTitle, CardText, Button, Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import './Note.css';

const Container = Styled.div`
    padding: 1%;
    margin: 1%;
    width: 20%;
    height: 300px;
    overflow: hidden;
    border: 1px solid #a5a5a5;
    background-color: #ffffff;
    text-overflow: ellipsis;

    h5:hover {
        color: #3f51b5;
    }
`;

const Header = Styled.header`
    padding: 1%;
    border-bottom: 2px solid #b0b0b0;
    margin: 0 4% 0 4%;
    font-weight: bold;
    color: black;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Content = Styled.div`
    padding: 4%;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: 70%;
`;

function Note(props) {
    return (
        <Container>
             <NavLink to={`/notes/${props.note.id}`} >
                 <Header><h1>{props.note.title}</h1></Header>
                 <Content className="block-with-text">{props.note.textBody}</Content>
             </NavLink>
         </Container>

        
    );
};

export default Note;