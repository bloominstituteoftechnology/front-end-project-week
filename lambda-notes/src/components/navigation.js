import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default () => {
  return (
    // <div>
    //   <h1 className="">Lambda Notes</h1>
    //   <Nav vertical>
    //     <Link to="/">
    //      <Button className="Button">View Your Notes</Button>
    //     </Link>
    //     <Link to="/create">
    //      <Button className="Button">+ Create New Note</Button>
    //     </Link>
    //   </Nav>
    // </div>
    <Container className="NavContainer col-3">
      <h2 className="Nav__header">Lambda Notes</h2>
      <div className="Nav__Buttons">
        <Link to="/">
          <Button className="Button">View Your Notes</Button>
        </Link>
        <Link to="/create">
          <Button className="Button">+ Create New Note</Button>
        </Link>
      </div>
    </Container>
  )
}