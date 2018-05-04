import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Lambda Notes!</h2>
      <h2>If you don't have a user account, register here</h2>
      <Link to="/register" className="link">
        + Register Here
      </Link>
      <h2>
        If you've already created an account, use the Login button in the
        navigation.
      </h2>
    </div>
  );
};

export default Home;
