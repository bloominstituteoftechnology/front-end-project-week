import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from '../components'
import './Sidebar.css';

export const Sidebar = props => (
  <div className="Sidebar">
    <Link to='/' className="sidebar-heading">
      <h1>Lambda</h1>
      <h1>Notes</h1>
    </Link>
    <Link to='/'>
      <button className="sidebar-button" >View All Notes</button>
    </Link>
    <Link to='/note/create'>
      <button className="sidebar-button">Create Note</button>
    </Link>
    {props.loading ? (<Spinner/>) : ''}

  </div>
)