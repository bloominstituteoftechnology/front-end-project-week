import React from 'react';
import './SideBar.css';
import { NavLink } from 'react-router-dom';

class SideBar extends React.Component {

  render() {
    return (
      <div className='sidebar'>
        <h1>Lambda Notes</h1>
        <NavLink to='/' className='button'><button>View Your Notes</button></NavLink>
        <NavLink to='/new' className='button'><button>+ Create New Node</button></NavLink>
        <NavLink to='/export' className='button'><button>Export Notes</button></NavLink>
      </div>
    );
  }

}

export default SideBar;