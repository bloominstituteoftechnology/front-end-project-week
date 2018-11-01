import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Wrapper = styled.section`
  
`;

export const Heading = styled.h1`
  
`;

export const Button = styled.button`
 
`;

const NavigationBar = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Lambda Notes</Heading>
        <Button type="button">
          <Link exact="true" to="/">View Your Notes</Link>
        </Button>
        <Button type="button">
          <Link to="/create">+ Create New Note</Link>
        </Button>
      </Wrapper>
    </Container>
  );
}

export default NavigationBar;
