import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="ButtonColumn">
      <h1 className="LambdaNotes">Lambda Notes</h1>
      <Link to="/"><div className="Button">View Your Notes</div></Link>
      <Link to="/createNew"><div className="Button">+ Create New Note</div></Link>
    </div>
  )
}

