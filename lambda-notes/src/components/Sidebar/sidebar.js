import React from 'react';
import Header from '../Header/Header.js';
import Button from '../Button/Button.js';
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="sidebar col-2 col-md-3">
      <Header title="Lambda Notes"/>
      <Button type="primary" title="View Your Notes" />
      <Button type="primary" title="+ Create New Note" />
    </div>
  );
}

export default Sidebar; 