import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>List View</h1>
        <Link to="/">Your Notes:</Link>
      </div>
    </div>
  );
};

export default Navigation;