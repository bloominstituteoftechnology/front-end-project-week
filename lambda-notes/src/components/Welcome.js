import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
      <div className='welcome'>
    <h4>Welcome to Notes</h4>
    <Link to='/signin'><div className='button'>Login</div></Link>
    <Link to='/signup'><div className='button'>Register</div></Link>
    </div>
    )
}

export default Welcome;
