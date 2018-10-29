import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <h1>Lambda Notes</h1>
      <div>
        <Link to="/">View Your Notes</Link>
      </div>
      <div>
        <Link to="createnewview">+ Create New Note</Link>
      </div>
    </div>
  );
};

export default Navigation;
