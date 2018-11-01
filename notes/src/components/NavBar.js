import React from 'react';

const NavBar = props => {
  return (
    <div className='nav-bar'>
      <h1>Lambda Notes</h1>
      <nav>
        {/* <a>View Your Notes</a>
        <a>+ Create New Note</a> */}
        <div>
        <button>View Your Notes</button>
        <div>
        </div>
        <button>+ Create New Note</button>
        </div>
      </nav>
    </div> // nav-bar
  )
}

export default NavBar;