import React from 'react';
import { Link } from 'react-router-dom';
import { Container, H1, Button } from '../StyledComponents/SideBar'

export default () => (
  // <div className="left">
  <Container>
    <H1>Lambda Notes</H1>
    <Link to="/">
      <Button>View Your Notes</Button>
    </Link>
    <Link to="/new">
      <Button>Create New Note</Button>
    </Link>
  </Container>
  // </div>
);
