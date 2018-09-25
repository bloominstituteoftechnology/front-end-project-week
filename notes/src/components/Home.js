import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>Welcome to the Lambda Notes App</h1>
        <Link to="/notes">View Notes</Link>
  </div>
  );
}

export default Home;
