import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../Header/Header.js';
import Button from '../Button/Button.js';



const Sidebar = () => {
  return (
    <div className="sidebar col-2 col-md-3">
      <Header title="Lambda Notes"/>
      <Link to="/">
      <Button type="primary" title="View Your Notes" />
      </Link>
      <br/>
      <br/>
      <Link to="/create">
      <Button type="primary" title="+ Create New Note"/>
      </Link>
    </div>
  );
}

export default Sidebar; 