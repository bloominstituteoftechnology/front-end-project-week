import React from 'react';
import MainContent from './MainContentContainer';
import MenuContainer from './MenuContainer';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
`
const NoteContainer = props => {
    return (
        <Container>
            <MenuContainer/>
            <MainContent notes={props.notes}/>
        </Container>
    )
}

export default NoteContainer;