import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SideBar = () => {
  return (
    <Container>
      <h1>Lambda Notes</h1>
      <Link to="/">View Your Notes</Link>
      <Link to="/notes/new">+ Create a New Note</Link>
    </Container>
  );
};

export default SideBar;
