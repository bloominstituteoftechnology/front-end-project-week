import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1%;
  width: 350px;
  background: #bbb;
  height: ${window.innerHeight}px;
  border-right: 1px solid black;
  position: fixed;
  left: 0;
`;

const Button = styled(Link)`
  width: 95%;
  border: 1px solid #aaa;
  border-radius: 3px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background: #009999;
  &:hover {
    color: #009999;
    background: white;
  }
  color: white;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin-bottom: 20px;
  color: #222;
`;

const SideBar = () => {
  return (
    <Container>
      <Logo>Lambda Notes</Logo>
      <Button to="/">View Your Notes</Button>
      <Button to="/notes/new">+ Create a New Note</Button>
    </Container>
  );
};

export default SideBar;
