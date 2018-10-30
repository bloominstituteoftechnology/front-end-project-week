import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Wrapper } from './Styles';

const NavigationBar = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Lambda Notes</h1>
        <Link exact="true" to="/">
          <button type="button">View Your Notes</button>
        </Link>
        <Link to="/create">
          <button type="button">+ Create New Note</button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default NavigationBar;
