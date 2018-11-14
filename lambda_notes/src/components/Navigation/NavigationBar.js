import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Wrapper, Heading, Button } from './Styles';

const NavigationBar = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Lambda Notes</Heading>
        <Button type="button">
          <Link exact="true" to="/">
            View Your Notes
          </Link>
        </Button>
        <Button type="button">
          <Link to="/create">
            + Create New Note
          </Link>
        </Button>
      </Wrapper>
    </Container>
  );
}

export default NavigationBar;