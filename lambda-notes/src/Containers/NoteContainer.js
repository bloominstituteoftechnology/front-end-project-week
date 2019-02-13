import React from 'react';
import MainContent from './MainContentContainer';
import MenuContainer from './MenuContainer';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
`
const NoteContainer = () => {
    return (
        <Container>
            <MenuContainer/>
            <MainContent/>
        </Container>
    )
}

export default NoteContainer;