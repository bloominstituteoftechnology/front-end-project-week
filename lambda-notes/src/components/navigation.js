import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav } from 'reactstrap';

export default () => {
  return (
    <div className="Nav__Container">
      <h1 className="Nav__Header">Lambda Notes</h1>
      <Nav vertical className="Nav__ButtonsContainer">
        <Link to="/">
         <Button className="Nav__ButtonsContainer--navButton">View Your Notes</Button>
        </Link>
        <Link to="/create">
         <Button className="Nav__ButtonsContainer--navButton">+ Create New Note</Button>
        </Link>
      </Nav>
    </div>
  )
}