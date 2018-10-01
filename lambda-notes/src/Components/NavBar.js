import React from 'react';

const NavBar = props => {
  return (
    <div className='Navbar-container'>
      <h1>Lambda Notes</h1>
      <button>View Your Notes</button>
      <button>+ Create New Note</button>
    </div>
  );
}

export default NavBar;