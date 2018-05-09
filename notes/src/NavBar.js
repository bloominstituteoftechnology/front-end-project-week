import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="ButtonColumn">
      <h1 className="LambdaNotes">Lambda Notes</h1>
      <Link to="/createNew"><div className="Button">Create New</div></Link>
      <Link to="/"><div className="Button">View Notes</div></Link>
      <div className="Button">Edit Notes</div>
      <div className="Button">Delete Notes</div>
    </div>
  )
}

