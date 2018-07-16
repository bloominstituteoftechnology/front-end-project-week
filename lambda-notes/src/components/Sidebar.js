import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div>
         <h1>Lambda Notes</h1>
          <Link to="/list-notes">
            <button> View Your Notes</button> 
          </Link>
          <Link to="/create-note">
            <button> + Create New Note</button>
          </Link>
      </div>
    );
  }
}

export default Sidebar;