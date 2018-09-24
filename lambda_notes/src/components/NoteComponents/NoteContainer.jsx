import React, { Component } from 'react';
import Styled from 'styled-components';

import NoteList from './NoteList';

const Wrapper = Styled.div`
    margin-left: 18%;
`;

const Header = Styled.header`
`;

const Container = Styled.div`
    
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