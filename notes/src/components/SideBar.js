import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

  render() {
    return (
      <div className='sidebar'>
        <h1>Lambda Notes</h1>
        <Link to='/' className='button'><button>View Your Notes</button></Link>
        <Link to='/new' className='button'><button>+ Create New Node</button></Link>
        <Link to='/export' className='button'><button>Export Notes</button></Link>
      </div>
    );
  }

}

export default SideBar;