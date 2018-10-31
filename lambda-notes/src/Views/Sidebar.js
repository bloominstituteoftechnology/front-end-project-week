import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar = props => (
  <div className="Sidebar">
    <h1>hey I'm the sidebar</h1>
    <Link to='/'>
      <button>View All Notes</button>
    </Link>
    <Link to='/create'>
      <button>Create Note</button>
    </Link>

  </div>
)