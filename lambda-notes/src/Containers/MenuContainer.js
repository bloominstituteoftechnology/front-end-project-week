import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Container = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    flex-wrap:wrap;
    height:100%;
    width: 15%;
    background:#d3d2d3;
`;

const ButtonContainer = styled.div`
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
    align-items: center;
    flex-direction:row;
`

const TitleContainer = styled.section`
    display:flex;
    justify-content:center;
    height:100px;
    width: 10%;
    margin-bottom:10px;
`
const Title = styled.h1`
    text-align:justify;
    font-size:2em;
`;

const Button = styled.div`
    display:flex;
    justify-content:center;
    min-width:150px;
    max-width: 150px;
    border:1px solid black;
    margin-bottom:10px;
    padding:5px;
    background:#24b8bd;
`;

const StyledLink = styled(Link)`
    display:flex;
    text-decoration:none;
    color:black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const MenuContainer = () => {
    return(
        <Container>
            <TitleContainer className="title">
                <Title>Lambda Notes</Title>
            </TitleContainer>
            <ButtonContainer>
                <StyledLink to={'/'}>
                    <Button>View Your Notes</Button>
                </StyledLink>
                <StyledLink to={'/create-new'}>
                    <Button>+ Create New Note</Button>
                </StyledLink>
            </ButtonContainer>
        </Container>
    )
}

export default MenuContainer;