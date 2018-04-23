import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

export default () => {
  return (
    <Container className="NavContainer col-3">
      <h2 className="Nav__header">Lambda Notes</h2>
      <div className="Nav__Buttons">
        <Link to="/">
          <button className="Button">View Your Notes</button>
        </Link>
        <Link to="/create">
          <button className="Button">+ Create New Note</button>
        </Link>
      </div>
    </Container>
  )
}