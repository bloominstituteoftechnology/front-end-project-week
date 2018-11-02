import React from 'react';

const NavBar = props => {
  return (
    <div className='nav-bar'>
      <h1>Lambda Notes</h1>
      <nav>
        <ul>
          <li> <a href='https://fe-notes.herokuapp.com/note/get/all'>View Your Notes</a> </li> 
          <li> <a href='https://fe-notes.herokuapp.com/note/create'>+ Create New Note</a> </li> 
        </ul>
        {/* <div>
        <button>View Your Notes</button>
        <div>
        </div>
        <button>+ Create New Note</button>
        </div> */}
      </nav>
    </div> // nav-bar
  )
}

export default NavBar;