import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    width: 25%;
    background:grey;
`;

const ButtonContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`

const TitleContainer = styled.section`
    display:flex;
    justify-content:flex-start;
    height:100px;
    width: 50px;
    border: 1px solid red;
`
const Title = styled.h1`
    text-align:justify;
`;

const MenuContainer = () => {
    return(
        <Container>
            <TitleContainer className="title">
                <Title>Lambda Notes</Title>
            </TitleContainer>
            <ButtonContainer>
                <Link to={'/'}>
                    <button>View Your Notes</button>
                </Link>
                <Link to={'/create-new'}>
                    <button>+ Create New Note</button>
                </Link>
            </ButtonContainer>
        </Container>
    )
}

export default MenuContainer;