import React, { Component } from 'react';
import Styled from 'styled-components';

import NoteList from './NoteList';

const Wrapper = Styled.div`
    width: 100%;
    margin-left: 20%;
`;

const Header = Styled.header`
    width: 100%;
`;

const Container = Styled.div`
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;
`;

function NoteContainer(props) {
    return (
        <Wrapper>
            <Header><h1>Your Notes:</h1></Header>
            <Container>
                <NoteList notes={props.notes} />
            </Container>
            
        </Wrapper>
    )
};

export default NoteContainer;