import React from 'react';
import { Link } from 'react-router-dom';



const SideBar = ( ) => {
  return (
    <div className="sidebar">
      <h1>Lambda Notes</h1>
      <div className="main-btn">
        <Link to={'/'}>
        <button>View Your Notes</button>
        </Link>
        <Link to={'/note/create'}>
        <button>+ Create New Note</button>
        </Link>
      </div>
    </div>
  )
}

export default SideBar;