import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
  position: fixed;
  width: 30%;
  min-height: 100vh;
  max-height: 100%;
  border-right: 1px solid black;
  background-color: #D3D2D3;
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5%;
  max-height: 100%;
`;
const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 4rem;
  font-weight: bold;
 
`;
const Button = styled.button`
  margin: 10px 0;
  padding: 25px;
  background-color: #33CAFF;
  font-size: 1.6rem;
  a {
    color: #FFF;
  }
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
