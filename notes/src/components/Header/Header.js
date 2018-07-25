import React from 'react';
import './Header.css';
import WrappedLink from '../WrappedLink';

const Header = props => {
  return(
    <div className='header'>
      <h1>Lambda Notes</h1>
      <WrappedLink name="View Your Notes" route="/" />
    </div>
  )
}

export default Header;
