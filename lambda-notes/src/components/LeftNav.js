import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeftNav extends Component {
  render() {
    return (
      <header>
        <nav>
          <div>
            <h1>Lambda<br/>Notes</h1>
          </div>
          <div className="left-nav-buttons">
            <button><Link to='/list'>View Your Notes</Link></button><br/>
            <button><Link to='/newnote'>+ Create New Note</Link></button>
          </div>
        </nav>
      </header>
    )
  }
}

export default LeftNav;