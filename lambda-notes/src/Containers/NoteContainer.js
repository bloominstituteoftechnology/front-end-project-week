import React from 'react';
import MainContent from './MainContentContainer';
import MenuContainer from './MenuContainer';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
`
const NoteContainer = props => {
    console.log(props.notes)
    return (
        <Container>
            <MenuContainer/>
            <MainContent notes={props.notes}/>
        </Container>
    )
}

export default NoteContainer;