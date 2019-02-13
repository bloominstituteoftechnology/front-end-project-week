import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content:flex-start;
    width:75%;
    flex-wrap:wrap;
    padding-left:50px;
    padding-right:50px;
`;

const TitleContainer = styled.div`
    display:flex;
    justify-content: flex-start;
    width: 100%;
`
const Title = styled.h2`
`;

const NotesContainer = styled.section`
    display:flex;
    flex-wrap:wrap;
    width: 100%;
    border: 1px solid black;
    padding-left: 10px;
`;

const Note = styled.div`
    border:1px solid red;
`
const MainContent = () => {
    return(
        <Container>
            <TitleContainer>
                <Title>Your Notes:</Title>
            </TitleContainer>
            <NotesContainer>
                <Note>
                    <h3>Note Title</h3>
                    <div>_____</div>
                    <p>lorem ipsum bruh</p>
                </Note>
            </NotesContainer>
        </Container>
    )
}

export default MainContent;