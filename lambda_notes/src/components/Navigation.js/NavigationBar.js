import React from 'react';

import { Container, Wrapper } from './Styles';

const NavigationBar = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Lambda Notes</h1>
        <button type="button">View Your Notes</button>
        <button type="button">+ Create New Note</button>
      </Wrapper>
    </Container>
  );
}

export default NavigationBar;
