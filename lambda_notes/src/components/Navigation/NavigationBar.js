import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Wrapper } from './Styles';

const NavigationBar = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Lambda Notes</h1>
        <Link exact to="/">
          <button type="button">View Your Notes</button>
        </Link>
        <button type="button">+ Create New Note</button>
      </Wrapper>
    </Container>
  );
}

export default NavigationBar;
