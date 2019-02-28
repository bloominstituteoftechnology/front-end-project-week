import React from 'react';
import Card from '../Components/CardComponent';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display:flex;
    justify-content:flex-start;
    width:100%;
    flex-wrap:wrap;
    padding-left:50px;
    padding-right:50px;
    background:#f2f1f2;
`;

const TitleContainer = styled.div`
    display:flex;
    justify-content: flex-start;
    width: 100%;
    height:40px;
    margin-top:0;
    margin-bottom:0;
`
const Title = styled.h2`
    display:flex;
    height:20px;
`;

const NotesContainer = styled.section`
    display:flex;
    justify-content:flex-start;
    flex-direction: row;
    flex-wrap:wrap;
    position:relative;
    top:-400px;
    padding-top:25px;
    width: 100%;
    padding-left: 10px;
`;

const StyledLink = styled(Link)`
    display:flex;
    text-decoration:none;
    color:black;
    width:30%;
    height:0px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const MainContent = props => {
    return(
        <Container>
            <TitleContainer>
                <Title>Your Notes:</Title>
            </TitleContainer>
            <NotesContainer>
                { props.notes ? props.notes.map(note => <StyledLink to={`/note/${note._id}`} key={note._id}><Card key={note._id}note={note}/></StyledLink> ) : (<div>loading</div> )}
            </NotesContainer>
        </Container>
    )
}

export default MainContent;