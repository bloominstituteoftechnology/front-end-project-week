import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="NavContainer">
      <h2 className="Nav__header">Lambda Notes</h2>
      <Link to="/">
        <button className="Button">View Your Notes</button>
      </Link>
      <Link to="/create" className="ButtonLink">
        <button className="Button">+ Create New Note</button>
      </Link>
    </div>
  )
}