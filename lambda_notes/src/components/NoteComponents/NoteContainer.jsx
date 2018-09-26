import React from 'react';
import Styled from 'styled-components';

import NoteList from './NoteList';

const Wrapper = Styled.div`
    margin-top: 80px;
    background-color: #f3f3f3;
    color: white;

`;

const Header = Styled.header`
    font-weight: bold;
    padding-left: 1%;
    color: #4a494a;

    h1 {
        font-size: 30px;
        font-weight: bold;
    }
    
`;

const Container = Styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #f3f3f3;

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