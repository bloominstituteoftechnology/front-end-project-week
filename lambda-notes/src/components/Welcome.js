import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
      <div>
    <div>Welcome to Notes</div>
    <Link to='/signin'>Login</Link>
    <Link to='/signup'>Register</Link>
    </div>
    )
}

export default Welcome;
