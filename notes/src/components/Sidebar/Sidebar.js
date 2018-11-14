import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css'

class Sidebar extends React.Component {
    render() {
      return (
        <div className="sidebar">

          <h1 className="title">Lambda Notes</h1>
          <Link to='/' style={{textDecoration: 'none'}}>
            <div className="button" style={{cursor: 'pointer'}}>View Your Notes</div>
          </Link>

          <Link to='/create' style={{textDecoration: 'none'}}>
            <div className="button" style={{cursor: 'pointer'}}>+ Create New Note</div>
          </Link>
        </div>
      );
    }
  }
  
  export default Sidebar;